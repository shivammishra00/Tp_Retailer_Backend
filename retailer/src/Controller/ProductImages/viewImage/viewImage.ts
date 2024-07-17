import express, { Request, Response } from "express";

const connection = require('../../../Model/dbConnected');

const viewDescription = async (req:Request, res:Response)=>{
    const imageid:string = req.params.imageid;
    if(!imageid){
        return res.json({Error: "imageid is required"});
    }
    console.log(imageid)
    const sqlQuery = `SELECT * FROM tbl_retailer_product_images WHERE imageid=?`
    await connection.query(sqlQuery, [imageid], (err:any, result:any)=>{
        if(err) return res.json({Status: false, Error: err.sqlMessage, error: "Query Error"})
        else return res.json({Status: true, result})
    })
}


module.exports = {viewDescription}