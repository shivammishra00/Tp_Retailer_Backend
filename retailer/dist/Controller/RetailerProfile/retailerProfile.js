"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection = require("../../Model/dbConnected.ts");
const profileRetailer = (req, res) => {
    const sqlQuery = `SELECT * FROM tbl_retailer_reg`;
    connection.query(sqlQuery, (err, result) => {
        if (err)
            return res.json({
                Status: false,
                Error: "Query error",
                error: err.sqlMessage,
            });
        else
            return res.json({ Status: true, result });
    });
};
module.exports = { profileRetailer };
