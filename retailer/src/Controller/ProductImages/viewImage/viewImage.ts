import express, { Request, Response } from "express";

const connection = require('../../../Model/dbConnected');

const viewDescription = async (req:Request, res:Response)=>{
    const pid:string = req.params.pid;
    if(!pid){
        return res.json({Error: "pid is required"});
    }
    console.log(pid)
    const sqlQuery = `SELECT * FROM tbl_retailer_product_images WHERE pid=?`
    await connection.query(sqlQuery, [pid], (err:any, result:any)=>{
        if(err) return res.json({Status: false, Error: err.sqlMessage, error: "Query Error"})
        else return res.json({Status: true, result})
    })
}


module.exports = {viewDescription}