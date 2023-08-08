const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  symbol: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
});

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock; 

