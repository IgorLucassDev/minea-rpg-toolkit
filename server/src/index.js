import express from 'express';

// Import routes
import name from './routes/name/name.js';
import dice from './routes/dice/dice.js';
import classes from './routes/classes/classes.js';

const app = express();
app.use(express.json());

app.get('/ping', (req, res) => {
    res.send('pong!');
})

app.use('/names', name)
app.use('/dice', dice)
app.use('/class', classes)


app.listen(3000, () =>{
    console.log('Server is running on port 3000');
})