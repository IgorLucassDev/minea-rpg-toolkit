import express from 'express';

const router = express.Router();

const generateNumber = (n) =>{
    return Math.floor(Math.random() * n);
}

router.get('/roll', (req, res) => {
    const dice = parseInt(req.query.d);
    res.json({ number: generateNumber(dice) });
});


export default router;