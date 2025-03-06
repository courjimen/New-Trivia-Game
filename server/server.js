import express from 'express'
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(cors());

const PORT = 5000;

//pull json data from api
app.get('/trivia', (req, res) => {
const url = 'https://opentdb.com/api.php?amount=10';

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