import express from 'express'
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(cors());

let PORT = 3000;

//pull json data from api
app.get('/trivia', async (req, res) => {
    try {
        const baseUrl = 'https://opentdb.com/api.php?amount=5';
        const { amount = 5, category, difficulty, type } = req.query;
        const urlParams = new URLSearchParams();

        urlParams.append('amount', amount);

        if (category) {
            urlParams.append('category', category);
        }

        if (difficulty) {
            urlParams.append('difficulty', difficulty);
        }
        if (type) {
            urlParams.append('type', type);
        }

        const url =  baseUrl + '?' + urlParams.toString();
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);

    } catch (error) {
        console.error("Error :", err)
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});