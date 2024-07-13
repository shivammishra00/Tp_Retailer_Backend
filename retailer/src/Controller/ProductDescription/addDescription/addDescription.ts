import { Request, Response } from "express"

const connetion = require('../../../Model/dbConnected.ts');

interface AddDesTypes {
    pid: string;
    discription: string;
    size: string;
    weight: string;
    ram: string;
    rom: string;
    screen: string;
    processer: string;
    mfd: string;
    expdate: string;
    material: string;
    originecountry: string;
    battery: string;
    camera: string;
}

const addDescription = async (req:Request,res:Response) =>{
    try{
        const data:AddDesTypes  = {
            pid: req.body.pid,
            discription: req.body.discription,
            size: req.body.size,
            weight: req.body.weight,
            ram: req.body.ram,
            rom: req.body.rom,
            screen: req.body.screen,
            processer: req.body.processer,
            mfd: req.body.mfd,
            expdate: req.body.expdate,
            material: req.body.material,
            originecountry: req.body.originecountry,
            battery: req.body.battery,
            camera: req.body.camera,
        }
        if(!data.pid){
            return res.json({Error: "pid is reuired"})
        }
        if(!data.discription){
            return res.json({Error: "discription is reuired"})
        }
        if(!data.size){
            return res.json({Error: "size is reuired"})
        }
        if(!data.weight){
            return res.json({Error: "weight is reuired"})
        }
        if(!data.ram){
            return res.json({Error: "ram is reuired"})
        }
        if(!data.rom){
            return res.json({Error: "rom is reuired"})
        }
        if(!data.screen){
            return res.json({Error: "screen is reuired"})
        }
        if(!data.processer){
            return res.json({Error: "processer is reuired"})
        }
        if(!data.mfd){
            return res.json({Error: "mfd is reuired"})
        }
        if(!data.expdate){
            return res.json({Error: "expdate is reuired"})
        }
        if(!data.material){
            return res.json({Error: "material is reuired"})
        }
        if(!data.originecountry){
            return res.json({Error: "originecountry is reuired"})
        }
        if(!data.battery){
            return res.json({Error: "battery is reuired"})
        }
        if(!data.camera){
            return res.json({Error: "camera is reuired"})
        }
        console.log(data)
        const sqlQuery = `INSERT INTO tbl_retailer_product_description SET ?`
        await connetion.query(sqlQuery, [data], (err:any, result:any)=>{
            if(err) return res.json({Status: false, Error: err.sqlMessage, error: "Querry Error"})
            else return res.json({Status: true, Message:"Product Desciption Add successfully", result})
        })
    } catch(err){
        console.log(err)
    }
}

module.exports = {addDescription}