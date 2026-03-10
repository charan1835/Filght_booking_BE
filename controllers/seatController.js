const seatModel = require("../models/seatModel");

exports.getSeats = async (req, res) => {
    try {
        const seats = await seatModel.getSeats();
        res.status(200).json(seats);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

exports.getSeatById = async (req, res) => {
    try {
        const { id } = req.params;
        const seat = await seatModel.getSeatById(id);

        if (!seat) {
            return res.status(404).json({ error: "Seat not found" });
        }

        res.status(200).json(seat);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};
