// Create a new stock
exports.createStock = (req, res) => {
  const newStock = new Stock(req.body);
  newStock.save()
    .then((savedStock) => res.status(201).send(savedStock))
    .catch((err) => res.status(500).send(err));
};

// Get all stocks
exports.getAllStocks = (req, res) => {
  Stock.find()
    .populate("company")
    .exec()
    .then((stocks) => res.json(stocks))
    .catch((err) => res.status(500).send(err));
};
const Stock = require("../models/stockModel");

// Get a stock by symbol
exports.getStockBySymbol = (req, res) => {
  Stock.findOne({ symbol: req.params.symbol })
    .populate("company")
    .exec()
    .then((stocks) => res.json(stocks))
    .catch((err) => res.status(500).send(err));
};

// Get a stock by id
exports.getStockById = (req, res) => {
  Stock.findById(req.params.id)
    .populate("company")
    .exec()
    .then((stocks) => res.json(stocks))
    .catch((err) => res.status(500).send(err));
};

// Get a stock by company
exports.getStockByCompany = (req, res) => {
  Stock.find({ company: req.params.id })
    .populate("company")
    .exec()
    .then((stocks) => res.json(stocks))
    .catch((err) => res.status(500).send(err));
};

// Update a stock
exports.updateStock = (req, res) => {
  const stockId = req.params.id;
  Stock.findByIdAndUpdate(stockId, req.body, { new: true })
    .populate("company")
    .exec()
    .then((updatedStock) => {
      if (!updatedStock) return res.status(404).send("Stock not found");
      res.json(updatedStock);
    })
    .catch((err) => res.status(500).send(err));
};

// Delete a stock
exports.deleteStock = (req, res) => {
  const stockId = req.params.id;
  Stock.findByIdAndDelete(stockId).exec()
    .then((deletedStock) => {
      if (!deletedStock) return res.status(404).send("Stock not found");
      res.json({ message: "Stock deleted successfully" });
    })
    .catch((err) => res.status(500).send(err));
};
