const mongoose = require("mongoose");
const DB_MONGODB_CONNECTION_URL = process.env.DB_MONGODB_CONNECTION_URL;

async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb+srv://username123:oq6f3HVT41jdDRH9@restaurant-booking.a3sw4mu.mongodb.net/?retryWrites=true&w=majority");
    console.log("Connected to DB");
  } catch (err) {
    console.error("Failed to connect to the database:", err);
    process.exit(1);
  }
}

module.exports = connectToDatabase;
