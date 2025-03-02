const jwt = require("jsonwebtoken");

// Middleware to check for JWT in the Authorization header
const authMiddleware = (req, res, next) => {
    // Get token from the Authorization header
    const token = req.cookies.token || req.header("Authorization")?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Authentication failed, token required" });
    }

    try {
        // Verify JWT
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach user info to the request object
        req.user = decoded;

        // Proceed to the next middleware
        next();
    } catch (error) {
        return res.status(403).json({ message: "Invalid or expired token" });
    }
};

module.exports = authMiddleware;
