const mongoose = require("mongoose");

const connectToMongo = async () => {
  try {
    console.log("MONGO_URI:", process.env.MONGO_URI); // debug

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};

module.exports = connectToMongo;
