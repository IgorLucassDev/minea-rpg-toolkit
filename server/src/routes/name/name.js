import express, { Router } from 'express';

import nameList from './list/nameList.js';
import surNames from './list/surnames.js';

const router = express.Router();

router.get('/random', (req, res) => {
    res.status(200);
    res.json({
        name: nameList[Math.floor(Math.random() * nameList.length)],
        surname: surNames[Math.floor(Math.random() * surNames.length)]
    });
})


export default router;