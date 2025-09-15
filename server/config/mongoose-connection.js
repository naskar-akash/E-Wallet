const mongoose = require("mongoose");
const mongodbURI =
  process.env.MONGOBD_URI;

(async () => {
  try {
    const response = await mongoose.connect(mongodbURI);
    console.log(
      `Database connected to ${response.connection.name} at ${response.connection.host}`
    );
  } catch (error) {
    console.log("Database connection error: ", error);
  }
})();

module.exports = mongoose.connection;
