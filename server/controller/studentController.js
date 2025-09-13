const Student = require("../model/student-model");
const {dateTime} = require("../util/dateTime")

module.exports.getStudent = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.createStudent = async (req, res) => {
  try {
    const { name, stClass, school, feesamount } = req.body;
    if (!name || !stClass || !school || !feesamount) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const newStudent = new Student({ name, stClass, school, feesamount });
    await newStudent.save();
    res.status(200).json({ message: "Student created successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports.updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const{date} = dateTime();
  try {
    const updatedStudent = await Student.findByIdAndUpdate({ _id: id }, { status,date }, { new: true });
    if (!updatedStudent) return res.status(404).json({ error: "Student not found" });
    res.status(200).json({ message: "Status updated successfully", student: updatedStudent });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports.deleteStudent = async (req, res) => {
    const {id} = req.params;
    try {
        await Student.findByIdAndDelete(id);
        res.status(200).json({message:"Student deleted successfully"});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
