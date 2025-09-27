const jwt = require("jsonwebtoken");
const User = require("../model/user-model");

const isLogged = async (req, res, next) => {
  if (!req.cookies.token) {
    return res.status(403).json({ message: "Login first!" });
  }
  try {
    const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
    const user = await User.findOne({ email: decoded.email }).select(
      "-password"
    );
    if (!user) {
      return res.status(401).json({ message: "User not found!" });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token!" });
  }
};

module.exports.isLogged = isLogged;
