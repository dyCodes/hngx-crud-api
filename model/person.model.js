const mongoose = require("mongoose");

const personSchema = mongoose.Schema({
	name: { type: String, required: true },
});

exports.Person = mongoose.model("person", personSchema);
