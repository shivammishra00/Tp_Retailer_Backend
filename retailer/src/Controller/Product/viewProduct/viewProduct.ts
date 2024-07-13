import express, { Request, Response } from "express";

const connection = require('../../../Model/dbConnected.ts')

const viewProduct = (req:Request, res:Response) => {
   const sqlQuery = `SELECT p.pid, p.pname, p.regno, p.subcatid, s.subcatname, p.price,  p.discount, p.brandname, p.quantity, p.image, p.addedon, p.lastupdate FROM tbl_retailer_product p JOIN  tbl_admin_subcategory s ON p.subcatid = s.subcatid`;
   connection.query(sqlQuery, (err:any, result:any)=>{
    if(err) return res.json({Status: false, Error: "Querry error", error: err.sqlMessage})
    else return res.json({Status: true, result})
   })
}

module.exports = {viewProduct}