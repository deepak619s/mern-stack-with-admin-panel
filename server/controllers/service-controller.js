const Service = require("../models/service-model");

const services = async (req, res) => {
  try {
    const response = await Service.find();
    res.status(200).json({ mssg: response });
    if (!response) {
      res.status(404).json({ mssg: "no service found" });
      return;
    }
    res.status(200).json({ mssg: response });
  } catch (error) {
    console.log(`services: ${error}`);
  }
};

module.exports = services;
