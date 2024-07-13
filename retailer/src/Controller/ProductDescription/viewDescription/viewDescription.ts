import { Request, Response } from "express";

const connection = require('../../../Model/dbConnected');

const viewDescription = async (req:Request, res:Response) =>{
    try{
        const pid:string = req.params.pid;
        if(!pid){
            return res.json({Error: "pid is required"})
        }
        const sqlQuery = `SELECT * FROM tbl_retailer_product_description WHERE pid=?`
        await connection.query(sqlQuery, [pid], (err:any, result:any)=>{
        if(err) return res.json({Status: false, Error: err.sqlMessage, error: "Query Error"})
        else return res.json({Status: true, result})
    })
    } catch(err){
        console.log(err)
    }
}

module.exports = {viewDescription}