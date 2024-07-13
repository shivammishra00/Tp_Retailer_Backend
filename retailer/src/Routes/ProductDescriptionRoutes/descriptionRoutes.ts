import express from "express";

const descriptionRouter = express.Router();

const {addDescription} = require('../../Controller/ProductDescription/addDescription/addDescription')
const {viewDescription} = require('../../Controller/ProductDescription/viewDescription/viewDescription')
const {updateDescription} = require('../../Controller/ProductDescription/updateDescription/updateDescription')

descriptionRouter.post("/addDescription", addDescription)
descriptionRouter.get("/viewDescription/:pid", viewDescription)
descriptionRouter.patch("/updateDescription/:pid", updateDescription)

module.exports = descriptionRouter 
