const flightModel = require("../models/flightModel");

exports.getFlights = async (req, res) => {
    try {
        const flights = await flightModel.getAllFlights();
        res.json(flights);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
};