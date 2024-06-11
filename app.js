require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();
const path = require('path');
const homeRouter = require("./routes/home");

app.use("/css", express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")));
app.use("/js",express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")));
app.use("/js",express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")));
app.use("/js",express.static(path.join(__dirname, "public/js")));

app.set("view engine", "pug");

app.use('/', homeRouter);

const port = process.env.PORT || 3001;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
