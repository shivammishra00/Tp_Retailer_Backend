import { Request, response } from "express";

const retailerLogout = (req:Request, res:any) =>{
    res.clearCookie('token')
    return res.json({Status: true, Message:"Retailer Logout Successfully !!!"})
}

module.exports = {retailerLogout}