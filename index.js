const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv/config");
const {
	getAll,
	getPerson,
	addPerson,
	updatePerson,
	deletePerson,
} = require("./controllers/person.controller");

// Connect to DB
mongoose.connect(process.env.MONGODB_CONNECTION, { useNewUrlParser: true });
mongoose.connection.on("connected", () => console.log("Connected to database"));
mongoose.connection.on("error", (err) => console.error(err));

// Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => res.send("HNGx Stage two task [dyCodes]"));
// Person routes
app.get("/api", getAll);
app.get("/api/:id", getPerson);
app.post("/api", addPerson);
app.put("/api/:id", updatePerson);
app.delete("/api/:id", deletePerson);

// Listen
app.listen(8000 || process.env.PORT, () => {
	console.log("Server is running successfully");
});
