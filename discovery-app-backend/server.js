const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./src/config/db");
const bookRoutes = require("./src/routes/bookRoutes");
const authRoutes = require("./src/routes/authRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes (Place them BEFORE DB connection)
app.use("/api/books", bookRoutes);
app.use("/api/auth", authRoutes);

// Connect to MongoDB
connectDB()
  .then(() => console.log("✅ MongoDB connected successfully!"))
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  });

// Health check route
app.get("/", (req, res) => {
  res.send("BookHub 📚 API is running...");
});

// Global Error Handling
app.use((err, req, res, next) => {
  console.error("🔥 Server Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
