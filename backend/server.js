const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const url = 'mongodb://localhost/mydb'

const app = express();
mongoose.connect(url);
const con = mongoose.connection;
con.on('open', () => {
    console.log("DB CONNECTED");
})
app.use(express.json())
app.use(
    cors({
        origin: "http://localhost:3000", // <-- location of the react app were connecting to
        credentials: true,
    })
);
const PORT = 8000;
app.post('/register', (req, res) => {
    console.log(req.body)
    res.send("HEY TEr")
})
app.listen(PORT,
    () =>
    console.log(Date.now()))