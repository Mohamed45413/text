const express = require('express');
const app = express();
app.get('/save', (req, res) => {
    res.end("hello would");
});
app.listen(5001, () => {
    console.log("localhost:5001/save");
});
