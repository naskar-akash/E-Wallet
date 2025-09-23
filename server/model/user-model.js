const mongoose = require("mongoose");
const { dateTime } = require("../util/dateTime");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
  date: {   
    type: String,
    default: () => dateTime().date,
  },
});

module.exports = mongoose.model("User", userSchema);