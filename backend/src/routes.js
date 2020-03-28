const express = require("express");
const OngsController = require("./controllers/OngsController");
const IncidentsController = require("./controllers/IncidentsController");
const SessionController = require("./controllers/SessionController");
const ProfileController = require("./controllers/ProfileController");

const routes = express.Router();

routes.post("/session", SessionController.store);

routes.get("/profile", ProfileController.index);

routes.get("/ongs", OngsController.index);
routes.post("/ongs", OngsController.store);

routes.get("/incidents", IncidentsController.index);
routes.post("/incidents", IncidentsController.store);
routes.delete("/incident/:id", IncidentsController.delete);

module.exports = routes;
