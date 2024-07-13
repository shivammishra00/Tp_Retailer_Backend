"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connection = require("../../Model/dbConnected.ts");
const retailerLogin = (req, res) => {
    const sqlQuery = `SELECT * FROM tbl_retailer_reg WHERE email = ?`;
    connection.query(sqlQuery, [req.body.email], (err, result) => {
        if (err)
            return res.json({ Statsu: false, Error: "Query error", error: err.sqlMessage });
        // else return res.json({Status:true, result})
        else if (result.length > 0) {
            bcrypt.compare(req.body.password.toString(), result[0].password, (err, response) => {
                if (err)
                    return res.json({ Status: false, Error: "Password Compare error" });
                else if (response) {
                    let regno = result[0].regno;
                    let ownername = result[0].ownername;
                    let image = result[0].image;
                    const token = jwt.sign({ regno: regno, ownername: ownername, image: image }, "jwt-secret-key", { expiresIn: "1d" });
                    // res.send(token)    /// for chek token
                    res.cookie('token', token);
                    return res.json({ loginStatus: true, regno });
                }
                else {
                    return res.json({ Statsu: false, Error: "Password Not Match" });
                }
            });
        }
        else {
            return res.json({ Status: false, Error: "Email not existed" });
        }
    });
};
module.exports = { retailerLogin };
