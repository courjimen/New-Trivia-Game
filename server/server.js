import express from 'express'
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(cors());

const PORT = 5000;

//pull json data from api
app.get('/trivia', (req, res) => {
let url = 'https://opentdb.com/api.php?amount=5';
const { amount, category, difficulty, type } = req.query;

if (amount) {
    url += `amount = ${amount}`;
} else {
    url += `amount = 5`;
} 

if (category) {
    url += `&category = ${category}`;
}

if (difficulty) {
    url += `&difficulty = ${difficulty}`;
}

if (type) {
    url += `&type = ${type}`;
}

    fetch(url)
    .then(response => {
    return response.json();
    })
    .then((data) => {
        res.json(data);
    })
    .catch(error => {
        console.log("error: ", error)
    })
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });