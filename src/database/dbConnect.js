const mongoose = require("mongoose");
require("dotenv").config();

async function dbConnect() {
  try {
    mongoose.connect(process.env.DB_URL);
    console.log("Succesfully connected to database");
  } catch (e) {
    console.error(e.message);
    throw new Error("Couldn't connect to MongoDB: ", error);
  }
}

module.exports = dbConnect;
