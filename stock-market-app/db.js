const mongoose = require ("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const uri = process.env.MONGO_URI;
//console.log("MONGO_URI:", process.env.MONGO_URI);

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB, yeeess!"))
    .catch((error) => console.log("Error connecting to MongoDB", error));
    
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

module.exports = mongoose;
