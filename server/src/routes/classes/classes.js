import classesList from "./classList.js";
import express from "express";

const router = express.Router();

router.get("/random", (req, res) => {
    res.json({
        class: classesList[Math.floor(Math.random() * classesList.length)]
    });
 });

export default router;