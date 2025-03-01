// ✅ Import Dependencies

require("dotenv").config();

const path = require("path");

const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const helmet = require("helmet");

const sanitizeHtml = require("sanitize-html");

const mongoSanitize = require("express-mongo-sanitize");

const rateLimit = require("express-rate-limit");

const cookieParser = require("cookie-parser");

const lusca = require("lusca");

const morgan = require("morgan");

const winston = require("winston");

const session = require("express-session");

// ✅ Initialize Express App

const app = express();

// 🛡️ Secure HTTP Headers

app.use(helmet());

// 📦 Body Parser & Cookie Parser

app.use(express.json());

app.use(cookieParser());

// ✅ 🌍 CORS Setup

app.use(

cors({

    origin: ["http://localhost:5173", "http://localhost:3000"],

    credentials: true,

    methods: ["GET", "POST", "PUT", "DELETE"],

})

);

// ✅ 🛡️ Express Session Middleware (Must Be Before lusca)

app.use(

session({

    secret: process.env.SESSION_SECRET || "f84559efda02c2e457b58b5d6c5c4e4110ff87394e265b86859d8f48f899ad7c",

    resave: false,

    saveUninitialized: true,

    cookie: { secure: false }, // Set `true` if using HTTPS

})

);

// ✅ Apply Lusca CSRF Protection Only to Non-API Routes

app.use((req, res, next) => {

if (req.path.startsWith("/api")) {

    return next(); // Skip CSRF for API routes

}

lusca.csrf()(req, res, next);

});

app.use(lusca.xframe("SAMEORIGIN"));

app.use(lusca.hsts({ maxAge: 31536000 }));

// 🛡️ Prevent NoSQL Injection

app.use(mongoSanitize());

// 🛡️ Input Sanitization

const sanitizeInput = (req, res, next) => {

if (req.body) {

    for (let key in req.body) {

        req.body[key] = sanitizeHtml(req.body[key]);

    }

}

next();

};

app.use(sanitizeInput);

// 🛡️ Rate Limiting (Prevent DDoS Attacks)

const limiter = rateLimit({

windowMs: 15 * 60 * 1000,

max: 100,

message: "Too many requests from this IP, please try again later.",

});

app.use(limiter);

// 🌱 Logging Requests

const logger = winston.createLogger({

level: "info",

format: winston.format.json(),

transports: [new winston.transports.File({ filename: "server.log" }), new winston.transports.Console()],

});

app.use(morgan("combined"));

// ✅ 🌱 Connect to MongoDB

const connectDB = async () => {

try {

    await mongoose.connect(process.env.MONGO_URI, {

        useNewUrlParser: true,

        useUnifiedTopology: true,

        ssl: true,

    });

    console.log("✅ MongoDB Connected Securely");

} catch (error) {

    console.error("❌ Database Connection Error: ", error.message);

    process.exit(1);

}

};

connectDB();

// ✅ 🚀 API Routes (Must Be Before Frontend)

const userRoutes = require("./routes/userRoutes");

const productRoutes = require("./routes/productRoutes");

const adviceRoutes = require("./routes/adviceRoutes");

const weatherRoutes = require("./routes/weatherRoutes");

const insightsRoutes = require("./routes/insightsRoutes");

app.use("/api/users", userRoutes);

app.use("/api/products", productRoutes);

app.use("/api/advice", adviceRoutes);

app.use("/api/weather", weatherRoutes);

app.use("/api/insights", insightsRoutes);



// ⚠️ Global Error Handler

app.use((err, req, res, next) => {

logger.error(`Error: ${err.message}`);

res.status(500).json({ message: "Something went wrong!" });

});

// ✅ 📌 Move Frontend Serving Below API Routes

const frontendPath = path.join(__dirname, "../Krishan/dist");

app.use(express.static(frontendPath));

app.get("*", (req, res) => {

res.sendFile(path.join(frontendPath, "index.html"));

});


// ✅ 🌍 Default API Route

app.get("/", (req, res) => {

    res.send("🌱 Welcome to Secure Agriculture API");
    
    });

// ✅ 🚀 Start Server

const PORT = process.env.PORT || 5000;
