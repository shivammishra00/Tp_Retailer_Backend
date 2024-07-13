import  express ,{Request, Response} from "express"

const connection = require('../../../Model/dbConnected.ts')

interface ProductType  {
    pid: string;
    pname: string;
    regno: string;
    subcatid: string;
    price: string;
    discount: string;
    brandname: string;
    quantity: string;
    image: string;
}

const addProduct = (req:Request | any, res:Response) =>{
    // console.log(req.body)
    // console.log(req.file)  //// Check if file is correctly uploaded

    if (!req.file) {
        return res.json({ Error: "File not uploaded" });
    }

    const data:ProductType = {
        pid: req.body.pid,
        pname: req.body.pname,
        regno : req.body.regno,
        subcatid: req.body.subcatid,
        price: req.body.price,
        discount: req.body.discount,
        brandname: req.body.brandname,
        quantity: req.body.quantity,
        image: req.file.location
    }
    if(!data.pid){
        return res.json({Error: "pid field is required"})
    }
    if(!data.pname){
        return res.json({Error: "pname field is required"})
    }
    if(!data.regno){
        return res.json({Error: "regno field is required"})
    }
    if(!data.subcatid){
        return res.json({Error: "subcatid field is required"})
    }
    if(!data.price){
        return res.json({Error: "price field is required"})
    }
    if(!data.discount){
        return res.json({Error: "discount field is required"})
    }
    if(!data.brandname){
        return res.json({Error: "brandname field is required"})
    }
    if(!data.quantity){
        return res.json({Error: "quantity field is required"})
    }
    if(!data.image){
        return res.json({Error: "image field is required"})
    }
    console.log(data)
    const sqlQuery = `INSERT INTO tbl_retailer_product SET ?`
    connection.query(sqlQuery, [data], (err:any, result:any)=>{
        if(err) return res.json({Status:false, error:"Query error", Error:err.sqlMessage})
        else return res.json({Status: true, Message: "Product added successfully !!!", result})
    })
}

module.exports = {addProduct}