import { Request, Response } from "express";

const connection = require("../../Model/dbConnected.ts");

const profileRetailer = (req: Request, res: Response) => {
  const sqlQuery = `SELECT * FROM tbl_retailer_reg`;
  connection.query(sqlQuery, (err: any, result: any) => {
    if (err)
      return res.json({
        Status: false,
        Error: "Query error",
        error: err.sqlMessage,
      });
    else return res.json({ Status: true, result });
  });
};

module.exports = { profileRetailer };
