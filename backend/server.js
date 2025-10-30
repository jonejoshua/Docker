const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { Kafka, Partitioners } = require("kafkajs");
require("dotenv").config();

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
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

const producer = kafka.producer({
  createPartitioner: Partitioners.LegacyPartitioner,
  retry: { retries: 10, initialRetryTime: 300 },
});

let kafkaReady = false;

// Kafka connection with retry
const connectKafka = async () => {
  let retries = 0;
  while (!kafkaReady) {
    try {
      await producer.connect();
      kafkaReady = true;
      console.log("✅ Connected to Kafka");
    } catch (err) {
      retries++;
      console.error(`❌ Kafka connection error (attempt ${retries}), retrying in 5s:`, err.message);
      await new Promise((res) => setTimeout(res, 5000));
    }
  }
};

connectKafka();

// -------------------
// Mongo Schema
// -------------------
const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Form = mongoose.model("Form", formSchema);

// -------------------
// API Routes
// -------------------
app.post("/api/form", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save to MongoDB
    const formData = new Form({ name, email, message });
    await formData.save();

    // Send to Kafka
    if (kafkaReady) {
      const metadata = await producer.send({
        topic: "form-submissions",
        acks: -1,
        messages: [{ key: `${Math.random()}`, value: JSON.stringify({ name, email, message }) }],
      });
      console.log(`📨 Sent message to Kafka partition: ${metadata[0].partition}`);
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
// Health Check
// -------------------
app.get("/health", (req, res) => {
  res.status(kafkaReady ? 200 : 503).send(kafkaReady ? "OK" : "Kafka not ready");
});

// -------------------
// Graceful Shutdown
// -------------------
process.on("SIGINT", async () => {
  console.log("🛑 Gracefully disconnecting Kafka...");
  await producer.disconnect();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  console.log("🛑 Gracefully disconnecting Kafka...");
  await producer.disconnect();
  process.exit(0);
});

// -------------------
// Server
// -------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
