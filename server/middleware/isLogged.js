const jwt = require("jsonwebtoken");
const User = require("../model/user-model");

const isLogged = async(req, res, next) => {
    if(!req.cookies.token) {
        res.status(403).json({message: "Login first!"});
    }
    try {
        const decoded = jwt.verify(req.cookies.token,process.env.JWT_SECRET);
        const user = await User.findOne({email: decoded.email}).select("-password");
        req.user = user;
        next();
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports.isLogged = isLogged;