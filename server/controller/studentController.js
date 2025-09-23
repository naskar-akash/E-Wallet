const Student = require("../model/student-model");
const User = require("../model/user-model");
const { dateTime } = require("../util/dateTime");

module.exports.getStudent = async (req, res) => {
  try {
    const students = await Student.find({ user: req.user._id });
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.createStudent = async (req, res) => {
  try {
    const { name, stClass, school, feesamount, status, notes, contact } = req.body;
    if (!name || !stClass || !school || !feesamount) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const students = new Student({
      name,
      stClass,
      school,
      feesamount,
      status,
      notes,
      contact,
      user: req.user._id,
    });
    await students.save();
    await User.findByIdAndUpdate(
      req.user._id,
      { $push: { students: students._id } },
      { new: true }
    );
    res.status(200).json({ message: "Student created successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports.updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status, notes } = req.body;
  const { date } = dateTime();
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      { _id: id },
      { status, notes, date },
      { new: true }
    );
    if (!updatedStudent)
      return res.status(404).json({ error: "Student not found" });
    res.status(200).json({
      message: "Status updated successfully",
      student: updatedStudent,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports.deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    await Student.findByIdAndDelete(id);
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports.getStudentById = async (req,res) => {
  try {
    const {id} = req.params;
    const student = await Student.findById(id);
    if(!student) {
      return res.status(404).json({message: "Student not found!"})
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
