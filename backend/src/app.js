const express = require("express");
const routes = require("./routes");
const cors = require("cors");

class App {
  constructor() {
    this.application = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.application.use(express.json());
    this.application.use(cors());
  }

  routes() {
    this.application.use(routes);
  }
}

module.exports = new App().application;
