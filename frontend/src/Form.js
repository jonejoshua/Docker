import React, { useState } from "react";
import axios from "axios";

export default function Form() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.post("http://localhost:5000/api/form", form);
    alert("✅ Form submitted!");
    setForm({ name: "", email: "", message: "" });
  } catch (error) {
    console.error("❌ Error submitting form:", error);
    alert("Failed to submit form. Check backend connection.");
  }
};

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required /><br />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required /><br />
      <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required /><br />
      <button type="submit">Submit</button>
    </form>
  );
}
