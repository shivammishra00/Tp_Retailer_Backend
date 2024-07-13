import { Request, Response } from "express";

const connection = require('../../../Model/dbConnected')

const updateDescription = (req:Request, res:Response) =>{
    try{
        const pid:string = req.params.pid;
        if(!pid){
            return res.json({Error: "pid is required"})
        }
        const data:string[] = [
            req.body.discription,
            req.body.size,
            req.body.weight,
            req.body.ram,
            req.body.rom,
            req.body.battery,
            req.body.processer,
            req.body.camera,
        ]
        const fields = ['discription', 'size', 'weight', 'ram', 'rom', 'battery', 'processer', 'camera'];
        for (let i = 0; i < fields.length; i++) {
            if (!data[i]) {
                return res.json({ Error: `${fields[i]} is required` });
            }
        }
        const sqlQuery = `UPDATE tbl_retailer_product_description SET discription=?, size=?, weight=?, ram=?, rom=?, battery=?, processer=?, camera=? WHERE pid=?`;

        connection.query(sqlQuery, [...data, pid], (err:any, result:any)=>{
            if(err) return res.json({Status: false, Error: err.sqlMessage, error: "Query Error"})
            else return res.json({Status: true, Message: "Description Updated Successfully", result})
        })
    } catch(err){
        console.log(err)
    }
}

module.exports = {updateDescription}