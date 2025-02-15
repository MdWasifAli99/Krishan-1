const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5004;

// Middleware
app.use(cors());
app.use(express.json());

// API Route
app.get("/api/message", (req, res) => {
    res.json({ message: "Hello from Express backend!" });
});

// Serve Frontend (Corrected Absolute Path)
const frontendPath = path.join(__dirname, "../Krishan/dist"); // Adjusted path
app.use(express.static(frontendPath));

app.get("*", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
});

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// Routes
app.use("/auth", require("./routes/authRoutes"));

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
