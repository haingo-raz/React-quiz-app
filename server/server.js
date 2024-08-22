const express = require('express');
const app = express();
const db = require('./database.js');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors())
app.use(bodyParser.json())

app.get("/getstats/:gameType", getStats)
app.post("/signup", register)
app.post("/login", login)
app.post("/save", saveGame)

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

function saveGame(req, res) {
    const gameData = req.body;
    db.saveGame(gameData).then((response) => {
        res.send(response);
    }).catch((error) => {
        console.error(error)
        res.json(error)
    })
}

function getStats(req, res) {
    const gameType = req.params.gameType;
    const user = req.query.user;
    db.getStats(gameType, user).then((response) => {
        res.send(response);
    }).catch((error) => {
        console.error(error)
        res.json(error)
    })
}

app.listen(8080, () => {
    console.log("Server is running on port 8080")
})