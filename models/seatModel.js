const pool = require("../db");

const getSeats = async () => {
    const result = await pool.query("SELECT * FROM seats");
    return result.rows;
};

const getSeatById = async (id) => {
    const result = await pool.query("SELECT * FROM seats WHERE id = $1", [id]);
    return result.rows[0];
};

module.exports = {
    getSeats,
    getSeatById,
};
