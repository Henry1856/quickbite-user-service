// import express from 'express';
import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    service: 'user-service',
    version:'1.0.0',
  });
});

export default router;
