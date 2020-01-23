const express = require('express')
const path = require('path')
const logger = require('morgan')
const bodyParser = require("body-parser");

const indexRouter = require("./routes/index")
const studentRouter = require("./routes/student")

const app = express()
app.use(logger('dev'))
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use("/", indexRouter);
studentRouter(app)

module.exports = app