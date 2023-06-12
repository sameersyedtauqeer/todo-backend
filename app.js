const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const TodoModel = require("./model/todoSchema");
const router = require("./routes/Index");
const PORT = process.env.PORT || 5000;
const DBURI =
    "mongodb+srv://syedsameerali26:admin@cluster0.glgxplc.mongodb.net/crud?retryWrites=true&w=majority"

mongoose.connect(DBURI)
    .then((res) => { console.log("DB Connected") })
    .catch((err) => { console.log(err) })


app.use(cors()); // allow cross origin 
app.use(express.json());  // allow body parser
app.use(router)

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`)
})

