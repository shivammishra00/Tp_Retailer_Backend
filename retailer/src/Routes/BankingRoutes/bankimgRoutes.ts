import express, { Request, Response } from "express";

const bankingRouter = express.Router();

const {addBankDetails} = require('../../Controller/Banking/addBankDetails/addBankDetails')
const {viewBankDetails} = require('../../Controller/Banking/viewBankDetails/viewBankDetails')
const {updateBankDetails} = require('../../Controller/Banking/updateBankDetails/updateBankDetails')

bankingRouter.post("/addBankDetails", addBankDetails)
bankingRouter.get("/viewBankDetails", viewBankDetails)
bankingRouter.patch("/updateBankDetails/:regno/", updateBankDetails)

module.exports = bankingRouter

