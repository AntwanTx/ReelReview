const express = require('express');
const cors = require('cors');
const app = express();
const { moviedata } = require('./data/moviedata');

app.use(cors());

app.get('/api/movies', (req, res) => {
    res.json(moviedata);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});