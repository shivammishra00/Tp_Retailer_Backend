"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const retailerRouter = express_1.default.Router();
const { RetailerRegistration } = require('../../Controller/RetailerRegister/retailerRegister');
const { profileRetailer } = require("../../Controller/RetailerProfile/retailerProfile");
const { retailerLogin } = require('../../Controller/RetailerLogin/retailerLogin');
retailerRouter.post("/resgiteration", RetailerRegistration);
retailerRouter.get("/profile", profileRetailer);
retailerRouter.post("/login", retailerLogin);
module.exports = retailerRouter;
