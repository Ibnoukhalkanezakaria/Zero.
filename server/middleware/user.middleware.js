import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (!authHeader?.startsWith("Bearer"))
    res.status(401).json({ error: "Unauthorized" });
  const accessToken = authHeader.split(" ")[1];
  jwt.verify(accessToken, process.env.ACCESS_TOKEN, (err, decoded) => {
    if (err) return res.status(403).json({ error: "Forbidden" });
    req.username = decoded.username;
    next();
  });
};

export default verifyToken;
