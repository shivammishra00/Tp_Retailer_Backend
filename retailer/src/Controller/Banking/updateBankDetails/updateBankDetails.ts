import express, { Request, Response } from "express";

const connection = require('../../../Model/dbConnected.ts')

const updateBankDetails = (req:Request, res:Response) =>{
    const regno:string = req.params.regno;
    console.log(regno)
    // console.log(req.body)
    const data:string[] = [
        req.body.accountno,
        req.body.accountname,
        req.body.bankname,
        req.body.ifsc,
        req.body.branchname,
        req.body.upi,
    ]
    console.log(data)
    const sqlQuery = `UPDATE tbl_retailer_banking SET accountno=?, accountname=?, bankname=?, ifsc=?, branchname=?, upi=? WHERE regno=?` ;
    connection.query(sqlQuery, [...data, regno], (err:any, result:any)=>{
        if(err) return res.json({Status: false, Error: "Query Error", error: err.sqlMessage})
        else return res.json({Status: true, Message: "Bank Details Updated Successfully", result})
    })
}

module.exports = {updateBankDetails}