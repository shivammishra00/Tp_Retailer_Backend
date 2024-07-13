"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
const salt = 10;
const connection = require("../../Model/dbConnected.ts");
const RetailerRegistration = (req, res) => {
    console.log(req.body);
    const sqlQuery = `INSERT INTO tbl_retailer_reg SET ?`;
    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        if (err)
            return res.json({ Status: false, Error: "error for hasing password" });
        const data = {
            regno: req.body.regno,
            gstno: req.body.gstno,
            tin: req.body.tin,
            pan: req.body.pan,
            shopname: req.body.shopname,
            ownername: req.body.ownername,
            image: req.body.image,
            landline: req.body.landline,
            mobile: req.body.mobile,
            weblink: req.body.weblink,
            email: req.body.email,
            address: req.body.address,
            country: req.body.country,
            state: req.body.state,
            city: req.body.city,
            pin: req.body.pin,
            document_reg_no: req.body.document_reg_no,
            document_pan_no: req.body.document_pan_no,
            document_gst_no: req.body.document_gst_no,
            document_shop: req.body.document_shop,
            termscondition: req.body.termscondition,
            aadhar: req.body.aadhar,
            password: hash,
        };
        connection.query(sqlQuery, [data], (err, result) => {
            if (err)
                return res.json({
                    Staus: false,
                    Error: "query error",
                    error: err.sqlMessage,
                });
            else
                return res.json({
                    Status: true,
                    Message: "Retailer Registered Successfully",
                    result,
                });
        });
    });
};
module.exports = { RetailerRegistration };
