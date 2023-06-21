import express from 'express';
import cors from 'cors';
import { addNewCandy, getCandy } from './src/ candy.js';
const PORT = 3000;

const app = express();
app.use(cors())
app.use(express.json())

app.get("/candy", getCandy);
app.post("/candy", addNewCandy);

app.listen(PORT, () => {
    console.log(`Listening on https://localhost:${PORT}...`)
})