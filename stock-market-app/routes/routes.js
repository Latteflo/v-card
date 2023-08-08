const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stockControllers');
const companyController = require('../controllers/companyControllers');

// Stock Routes
router.get("/stocks", stockController.getAllStocks);
router.get("/stocks/:symbol", stockController.getStockBySymbol);
router.get("/stocks/id/:id", stockController.getStockById);
router.get("/stocks/company/:id", stockController.getStockByCompany);
router.post("/stocks", stockController.createStock);
router.put("/stocks/:id", stockController.updateStock); 
router.delete("/stocks/:id", stockController.deleteStock); 

// Company Routes
router.get("/companies", companyController.getAllCompanies); 
router.get("/companies/:name", companyController.getCompanyByName); 
router.get("/companies/id/:id", companyController.getCompanyById); 
router.post("/companies", companyController.createCompany); 
router.put("/companies/:id", companyController.updateCompany); 
router.delete("/companies/:id", companyController.deleteCompany); 

module.exports = router;
