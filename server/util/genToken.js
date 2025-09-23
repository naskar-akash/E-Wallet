const jwt = require("jsonwebtoken");

const genToken = (user) => {
    if(!user) {
        throw new Error("User object is null!");
    }
    return jwt.sign({email: user.email, id: user._id}, process.env.JWT_SECRET);
};

module.exports.genToken = genToken;