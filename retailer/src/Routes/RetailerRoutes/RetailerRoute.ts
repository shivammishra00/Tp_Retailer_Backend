import express, {Request, Response} from "express";
const upload = require('./multaerImage')

const retailerRouter = express.Router();

const filesData:any =  upload.fields([         // middleware
    { name: 'image', maxCount: 1 },
    { name: 'document_reg_no', maxCount: 1 },
    { name: 'document_pan_no', maxCount: 1 },
    { name: 'document_gst_no', maxCount: 1 },
    { name: 'document_shop', maxCount: 1 },
  ])


const {RetailerRegistration} = require('../../Controller/RetailerRegister/retailerRegister')
const {profileRetailer} = require("../../Controller/RetailerProfile/retailerProfile")
const {retailerLogin} = require('../../Controller/RetailerLogin/retailerLogin')
const {retailerLogout} = require('../../Controller/RetailerLogut/retailerLogout')

retailerRouter.post("/resgiteration", filesData , RetailerRegistration)

retailerRouter.get("/profile", profileRetailer)
retailerRouter.post("/login", retailerLogin)
retailerRouter.get("/logout", retailerLogout)


module.exports = retailerRouter