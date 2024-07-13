"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = (0, express_1.default)();
dotenv.config();
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
const port = process.env.PORT;
////////==============  Api me restfull route diya  ============///////
const retailerRouter = require('./Routes/RetailerRoutes/RetailerRoute.ts');
app.use("/api/retailer", retailerRouter);
app.listen(port, () => {
    console.log(`server is running on ${port} port`);
});
