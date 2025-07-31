const express = require('express');
const { retrieveRelevantDocs } = require('./app.js');

const app = express()
const port = 3024

app.use(express.json())

app.post('/', async (req, res) => {
    const {query} = req.body;
    const results = await retrieveRelevantDocs(query);
    res.json({ results });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});