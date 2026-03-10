const pool = require("../db");

exports.getAllFlights = async () => {
    const result = await pool.query("SELECT * FROM flights");
    return result.rows;
};