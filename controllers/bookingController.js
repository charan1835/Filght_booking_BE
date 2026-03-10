const bookingModel = require("../models/bookingModel");

const getBookings = async (req, res) => {
    try {
        const bookings = await bookingModel.getBookings();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

module.exports = {
    getBookings,
};
