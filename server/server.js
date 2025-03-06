import express from 'express'

app.use(express);

const PORT = 5000;

//pull json data from api
app.get('/trivia', async (req, res) => {
    try {
        const url = `https://opentdb.com/api.php?amount=5&category=12`
        const response = await fetch(url);
        const data = await response.json();

        if (response.status === 304) {
            return res.send(null)
        }
        res.send();
    } catch (err) {
        console.error("error: ", err);
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });