import { Request, Response } from "express";

const verifyRetailer = (req: any, res: any) => {
  return res.json({
    Status: true,
    role: req.role,
    regno: req.regno,
    ownername: req.ownername,
    image: req.image,
  });
};

module.exports = { verifyRetailer };
