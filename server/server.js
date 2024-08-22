const express = require('express');
const app = express();
const db = require('./database.js');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors())
app.use(bodyParser.json())

app.post("/signup", register)
app.post("/login", login)

function register(req, res) {
    const userInfo = req.body;
    console.log(userInfo)
    db.register(userInfo).then((response) => {
        res.send(response);
    }).catch((error) => {               
        res.json(error)
    })
}

function login(req, res) {
    const userInfo = req.body;
    db.login(userInfo).then((response) => {
        res.send(response);
    }).catch((error) => {
        console.error(error)
        res.json(error)
    })
}

app.listen(8080, () => {
    console.log("Server is running on port 8080")
})