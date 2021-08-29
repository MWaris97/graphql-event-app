const express = require('express');
// const bodyParser = require('body-parser');
const { json } = require('body-parser');

const app = express();
app.use(json());

app.get('/', (req, res, next) => {
    res.send("Hello World");
});

app.get('/waris', (req, res, next) => {
    let obj = {
        "id": 123,
        "user": "Waris"
    }
    res.send(obj);
})

app.listen(3001);
