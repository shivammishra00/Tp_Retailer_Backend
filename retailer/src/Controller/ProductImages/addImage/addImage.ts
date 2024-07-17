import { ExpirationStatus } from "@aws-sdk/client-s3";
import express,{Request, Response} from "express";

const connection = require('../../../Model/dbConnected');


// here data type define //
interface DataType {
    pid: string;
    imageid: string;
    image: string;
    description: string;
    color: string;
} 

const addImage = async (req:Request | any, res:Response) => {
    // console.log(req.body)
    if(!req.file){
        return res.json({Error: "file is requierd"})
    }
    // console.log(req.file)
    try{
        const data: DataType = {
            pid: req.body.pid,
            imageid: req.body.imageid,
            image: req.file.location,
            description: req.body.description,
            color: req.body.color
        }
        if(!data.pid){
            return res.json({Error: "pid is requierd"})
        }
        if(!data.imageid){
            return res.json({Error: "imageid is requierd"})
        }
        if(!data.image){
            return res.json({Error: "image is requierd"})
        }
        if(!data.description){
            return res.json({Error: "description is requierd"})
        }
        if(!data.color){
            return res.json({Error: "color is requierd"})
        }
        console.log(data)
        const sqlQuery = `INSERT INTO tbl_retailer_product_images SET ?`
        await connection.query(sqlQuery, [data], (err:any, result:any)=>{
            if(err) return res.json({Status: false, Error: err.salMessage, error: "Query Error"})
            else return res.json({Status: true, Message: "Image added successfully", result})
        })
    } catch (err){
        console.log(err)
    }
}

module.exports = {addImage}

