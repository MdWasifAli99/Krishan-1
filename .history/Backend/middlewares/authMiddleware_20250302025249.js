const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
    // Get the token from cookies or Authorization header
    const token = req.cookies.token || req.header("Authorization")?.split(" ")[1];

    // If no token is found, return an error
    if (!token) {
        return res.status(401).json({ message: "Authentication failed, token required" });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach user information to the request object
        req.user = decoded;

        // Proceed to the next middleware
        next();
    } catch (error) {
        return res.status(403).json({ message: "Invalid or expired token" });
    }
};

module.exports = { protect };
