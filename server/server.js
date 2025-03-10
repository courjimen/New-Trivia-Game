import express from 'express'
import fetch from 'node-fetch';
import cors from 'cors';
import bodyParser from 'body-parser' 

const app = express();
app.use(cors());
app.use(bodyParser.json());

let PORT = 3000;

//pull json data from api
app.get('/trivia', async (req, res) => {
    try {
        const baseUrl = 'https://opentdb.com/api.php?amount=5';
        const { category, difficulty, type } = req.query;
        const urlParams = new URLSearchParams();

        if (category) {
            urlParams.append('category', category);
        }

        if (difficulty) {
            urlParams.append('difficulty', difficulty.toString().toLowerCase());
        }
        if (type) {
            urlParams.append('type', type);
        }

        const url =  baseUrl + '?' + urlParams.toString();
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error (`API Error : ${response.status} ${response.statusText}`)
        }
        const data = await response.json();
        res.json(data.results);

    } catch (error) {
        console.error("Error with Trivia Game:", error);
    }
});

app.post('/score', (req, res) => {
    console.log('received score request:', req.body);
    const { score, totalQuestions } = req.body;
    const percentage = (score / totalQuestions) * 100;
    const result = percentage > 51 ? `Winner!` : `You Lose`;

    res.json({ score, totalQuestions, result })
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});