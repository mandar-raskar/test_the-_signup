const express = require("express");
const bodyparser = require("body-parser")
const signup = require("./routes/signup")

const app = express();

app.use(express.json())

app.use("/users", signup)

app.listen(3000);