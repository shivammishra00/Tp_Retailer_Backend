import express, {Request, Response} from 'express';

const connection = require('../../../Model/dbConnected.ts')

interface AddBankTypes {
    regno: string;
    accountno: string;
    accountname: string;
    bankname: string;
    ifsc: string;
    branchname: string;
    upi: string;
}
const addBankDetails = (req: Request, res: Response) =>{
    const data:AddBankTypes = {
        regno: req.body.regno,
        accountno: req.body.accountno,
        accountname: req.body.accountname,
        bankname: req.body.bankname,
        ifsc: req.body.ifsc,
        branchname: req.body.branchname,
        upi: req.body.upi,
    }
    if(!data.regno){
        return res.json({Error: "regno field is required"})
    }
    if(!data.accountno){
        return res.json({Error: "accountno field is required"})
    }
    if(!data.accountname){
        return res.json({Error: "accountname field is required"})
    }
    if(!data.bankname){
        return res.json({Error: "bankname field is required"})
    }
    if(!data.ifsc){
        return res.json({Error: "ifsc field is required"})
    }
    if(!data.branchname){
        return res.json({Error: "branchname field is required"})
    }
    if(!data.upi){
        return res.json({Error: "upi field is required"})
    }
    console.log(data)
    const sqlQuery = `INSERT INTO tbl_retailer_banking SET ?`
    connection.query(sqlQuery, [data], (err:any, result:any)=>{
        if(err) return res.json({Status: false, Error: "Query Error", error: err.sqlMessage})
        else return res.json({Status: true, Message: "Bank Details Add Successfully !!!", result})
    })
}

module.exports = {addBankDetails}