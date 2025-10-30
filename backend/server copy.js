const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { Kafka } = require("kafkajs");
require("dotenv").config();

const app = express();
app.use(cors({
  origin: "http://localhost:3000"
}));

app.use(express.json());

// -------------------
// MongoDB Connection
// -------------------
mongoose
  .connect(process.env.MONGO_URI || "mongodb://mongo:27017/formdb")
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// -------------------
// Kafka Setup
// -------------------
const kafka = new Kafka({
  clientId: "form-app",
  brokers: [process.env.KAFKA_BROKER || "kafka:9092"],
});

//const producer = kafka.producer();
const { Partitioners } = require("kafkajs");

const producer = kafka.producer({
  createPartitioner: Partitioners.LegacyPartitioner,
});

let kafkaReady = false;

// Function to connect Kafka with retry
const connectKafka = async () => {
  while (!kafkaReady) {
    try {
      await producer.connect();
      kafkaReady = true;
      console.log("✅ Connected to Kafka");
    } catch (err) {
      console.error("❌ Kafka connection error, retrying in 5s:", err.message);
      await new Promise((res) => setTimeout(res, 5000));
    }
  }
};

// Start Kafka connection attempt
connectKafka();

// -------------------
// MongoDB Schema
// -------------------
const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Form = mongoose.model("Form", formSchema);

// -------------------
// API Endpoints
// -------------------
app.post("/api/form", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save to MongoDB
    const formData = new Form({ name, email, message });
    await formData.save();

    // Send to Kafka (only if ready)
    if (kafkaReady) {
      await producer.send({
        topic: "form-submissions",
        messages: [{ value: JSON.stringify({ name, email, message }) }],
      });
      console.log("📨 Sent message to Kafka");
    } else {
      console.warn("⚠️ Kafka not ready yet, skipping send");
    }

    res.json({ message: "✅ Form submitted successfully" });
  } catch (err) {
    console.error("❌ Error submitting form:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/forms", async (req, res) => {
  const data = await Form.find();
  res.json(data);
});

// -------------------
// Health Check Endpoint
// -------------------
app.get("/health", (req, res) => {
  if (kafkaReady) {
    res.status(200).send("OK");
  } else {
    res.status(503).send("Kafka not ready");
  }
});

// -------------------
// Start Server
// -------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
