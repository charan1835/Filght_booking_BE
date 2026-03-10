require("dotenv").config();
const express = require("express");
const pool = require("./db");
const cors = require("cors");
const flightRoutes = require("./routes/flightRoutes");
const seatRoutes = require("./routes/seatRoutes");
const bookingRoutes = require("./routes/bookingRoutes");


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/flights", flightRoutes);
app.use("/api/seats", seatRoutes);
app.use("/api/bookings", bookingRoutes);


app.get("/seats", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM seats");
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});

module.exports = app;
