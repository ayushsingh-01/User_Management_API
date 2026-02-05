import jwt from "jsonwebtoken";

const JWT_SECRET = "Qwerty12345!@#";

export const checkAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: "Authorization header missing"
        });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        console.log("JWT verified");
        next();
    } catch (error) {
        return res.status(403).json({
            message: "Invalid or expired token"
        });
    }
};

export const generateToken = (userId, name, email) => {
    return jwt.sign(
        { userId, name, email },
        JWT_SECRET,
        { expiresIn: "24h" }
    );
};
