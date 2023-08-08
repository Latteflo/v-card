const Company = require("../models/companyModel");

// Get all companies
exports.getAllCompanies = (req, res) => {
  Company.find().exec()
    .then((companies) => res.json(companies))
    .catch((err) => res.status(500).send(err));
};

// Get company by name
exports.getCompanyByName = (req, res) => {
  Company.findOne({ name: req.params.name }).exec()
    .then((company) => {
      if (!company) return res.status(404).send("Company not found");
      res.json(company);
    })
    .catch((err) => res.status(500).send(err));
};

// Get company by ID
exports.getCompanyById = (req, res) => {
  Company.findById(req.params.id).exec()
    .then((company) => {
      if (!company) return res.status(404).send("Company not found");
      res.json(company);
    })
    .catch((err) => res.status(500).send(err));
};

// Create a company
exports.createCompany = (req, res) => {
  console.log("Request body:", req.body); 
  const newCompany = new Company(req.body);
  newCompany.save()
    .then((company) => res.status(201).send(company))
    .catch((err) => res.status(500).send(err));
};

// Update a company by ID
exports.updateCompany = (req, res) => {
  Company.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec()
    .then((updatedCompany) => {
      if (!updatedCompany) return res.status(404).send("Company not found");
      res.json(updatedCompany);
    })
    .catch((err) => res.status(500).send(err));
};

// Delete a company by ID
exports.deleteCompany = (req, res) => {
  Company.findByIdAndDelete(req.params.id).exec()
    .then((deletedCompany) => {
      if (!deletedCompany) return res.status(404).send("Company not found");
      res.json({ message: "Company deleted successfully" });
    })
    .catch((err) => res.status(500).send(err));
};
