import express, { Request, Response } from "express";
const jwt = require("jsonwebtoken");

const verifyRouter = express.Router();

const { verifyRetailer } = require("../../Controller/RetailerVerify/verify.ts");

const verifyMethod = (req: any, res: any, next: any) => {
  const token = req.cookies.token;
  // res.send(token)
  if (token) {
    jwt.verify(token, "jwt-secret-key", (err: any, decoded: any) => {
      if (err) return res.json({ Status: false, Error: "There is no token" });
      else {
        req.role = decoded.role
        req.regno = decoded.regno
        req.ownername = decoded.ownername
        req.image = decoded.image
        next()
      }
    });
  } else {
    return res.json({ Status: false, Message: "you are not authenticated" });
  }
};

verifyRouter.get("/verify", verifyMethod, verifyRetailer);

module.exports = verifyRouter;