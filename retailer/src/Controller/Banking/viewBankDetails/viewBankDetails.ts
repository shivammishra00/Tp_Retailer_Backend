import express, { Request, Response } from "express";

const connection = require('../../../Model/dbConnected.ts')

const viewBankDetails = (req: Request, res:Response) =>{
   const sqlQuery = `SELECT b.regno, r.shopname, b.accountno, b.accountname, b.bankname, b.ifsc, b.branchname, b.upi, b.status from tbl_retailer_banking b JOIN tbl_retailer_reg r ON b.regno = r.regno`;

   connection.query(sqlQuery, (err:any, result:any)=>{
    if(err) return res.json({Status: false, Error: "Query Error", error: err.sqlMessage})
    else return res.json({Status: true, result})
   })

}

module.exports = {viewBankDetails}