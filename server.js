import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import * as fs from 'fs';

dotenv.config();

const app = express();
app.use(bodyParser.json({ limit: "50mb", extended: true}))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true}))
app.use(cors())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
  });

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
}

let dataDb;

app.post("/login", (req, res) => {
  console.log("tänne saavuttiin")
  let user = req.body;
  fs.readFile("data.json", (err, data) => {
    if (err) throw err;
    dataDb = JSON.parse(data);
    if (dataDb.find(x => x.userName === user.userName && x.password === user.password)) {
      res.sendStatus(200)
    } else {
      res.sendStatus(403)
    }
  })
})

app.post("/api", (req, res) => {
  let userName = req.body.user;
  fs.readFile("data.json", (err, data) => {
    if (err) throw err;
    dataDb = JSON.parse(data);
    let userData = dataDb.find(x => x.userName === userName);
    if (userData) {
      res.send(JSON.stringify(userData.todos));
    } else {
      res.sendStatus(403)
    }
  })
});

app.post(`/delete`, (req, res) => {
  let id = req.body.id;
  let user = req.body.user;
  fs.readFile("data.json", (err, data) => {
    if (err) throw err;
    dataDb = JSON.parse(data);
    let indexOfUser = dataDb.map(x => x.userName).indexOf(user);
    if (indexOfUser >= 0) {
      dataDb[indexOfUser].todos = dataDb[indexOfUser].todos.filter(todo => todo.id !== id);
      fs.writeFile("data.json", JSON.stringify(dataDb), err => {
        if (err) throw err;
        res.sendStatus(200)
      })
    }
  })
})


app.post(`/add`, (req, res) => {
  let todo = req.body;
  let uusData;
  fs.readFile("data.json", (err, data) => {
    if (err) throw err;
    uusData = JSON.parse(data);
    uusData.push(todo);
    fs.writeFile("data.json", JSON.stringify(uusData), err => {
      if (err) throw err;
      console.log("Writing to file successful")
    })
    res.send("done")
  })
})

app.post(`/edit`, (req, res) => {
  let todo_item = req.body;
  console.log(todo_item)
  let uusData;
  fs.readFile("todos.json", (err, data) => {
    if (err) throw err;
    uusData = Array.from(JSON.parse(data));
    const indOfEditing = uusData.map(x => x.id).indexOf(todo_item.id);
    console.log(indOfEditing)
    uusData[indOfEditing] = todo_item;
    fs.writeFile("todos.json", JSON.stringify(uusData), err => {
      if (err) throw err;
      console.log("Writing to file successful")
    })
    res.send("Edit successful")
  })
})

const DB_CONNECTION = process.env.DATABASE_URL;
const PORT = process.env.PORT || 6000;

app.listen(PORT, () =>
console.log(`Server is running at: http://localhost:${PORT}`)
)

// app.use("/api/blogs", blogPosts);

/* mongoose
  .connect(DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server is running at: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(error)); */



