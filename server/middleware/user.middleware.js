import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader?.startsWith("Bearer")) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const accessToken = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN);
    req.username = decoded.username;
    next();
  } catch (err) {
    res.status(403).json({ error: "Forbidden" });
  }
};

export default verifyToken;
