const User = require("../model/user-model");
const bcrypt = require("bcrypt");
const { genToken } = require("../util/genToken");

// Register a new user
module.exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: "User already exist, please login or try with another email!",
      });
    }
    //Hashing the password
    bcrypt.genSalt(12, (err, salt) => {
      if (err) return res.status(400).json({ message: err.message });
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) return res.status(400).json({ message: err.message });
        const user = await User.create({ name, email, password: hash });
        res
          .status(200)
          .json({ message: "user created successfully, please login!", user });
      });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Login a user
module.exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "All fields are required!" });
    }
    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ message: "Email or password incorrect!" });
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) return res.status(400).json({ message: err.message });
      if (result) {
        const token = genToken(user);
        res.cookie("token", token, {
          httpOnly: true, // prevent JS access
          secure: true, // cookie only over HTTPS
          sameSite: "None", // required for cross-origin
          maxAge: 24 * 60 * 60 * 1000, // 1 day
        });
       return res.status(200).json({ message: "Logging in!" });
      } else {
       return res.status(404).json({ message: "Email or password incorrect!" });
      }
    });
  } catch (error) {
   return res.status(403).json({ message: error.message });
  }
};

//Logout a user
module.exports.logoutUser = async (req, res) => {
  try {
    res.cookie("token", "");
    res.status(200).json({ message: "Log out successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Getting a user
module.exports.userProfile = async (req,res) => {
  try {
    res.status(200).json({user: req.user});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};