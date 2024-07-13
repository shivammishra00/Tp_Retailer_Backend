import express, {Request, Response} from 'express';
const connection = require('../../../Model/dbConnected.ts')

const updatePrice = (req:Request, res:Response) =>{
    const pid:string = req.params.pid;
    const {price}:{price:number} = req.body;
    const sqlQuery = `UPDATE tbl_retailer_product SET price=? WHERE pid=?`
    connection.query(sqlQuery, [price, pid], (err:any,result:any)=>{
        if(err) return res.json({Status: false, Error:"Query Error", error: err.sqlMessage})
        else return res.json({Status: true, Message: "Price updated Successfully", result})
    })
}
const updateDiscount = (req:Request, res:Response) =>{
    const pid:string = req.params.pid;
    const {discount}:{discount:string} = req.body;
    const sqlQuery = `UPDATE tbl_retailer_product SET discount=? WHERE pid=?`
    connection.query(sqlQuery, [discount, pid], (err:any,result:any)=>{
        if(err) return res.json({Status: false, Error:"Query Error", error: err.sqlMessage})
        else return res.json({Status: true, Message: "Discount updated Successfully", result})
    })
}
const updateQuantity = (req:Request, res:Response) =>{
    const pid:string = req.params.pid;
    const {quantity}:{quantity:string} = req.body;
    const sqlQuery = `UPDATE tbl_retailer_product SET quantity=? WHERE pid=?`
    connection.query(sqlQuery, [quantity, pid], (err:any,result:any)=>{
        if(err) return res.json({Status: false, Error:"Query Error", error: err.sqlMessage})
        else return res.json({Status: true, Message: "Quantity updated Successfully", result})
    })
}

module.exports = {updatePrice, updateDiscount, updateQuantity}