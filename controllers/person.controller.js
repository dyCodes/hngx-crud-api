const { Person } = require("../model/person.model");

exports.getAll = async (req, res, next) => {
	const persons = await Person.find();
	if (persons) {
		return next(res.status(200).json(persons));
	} else return next(res.status(404).json({ error: "No persons found" }));
};

exports.getPerson = async (req, res, next) => {
	const id = req.params.id;
	// Find person by id
	const person = await Person.findById(id).catch((err) => console.error(err));
	if (!person) {
		return next(res.status(404).json({ error: "Person not found" }));
	}
	// Return person
	return next(res.status(200).json(person));
};

exports.addPerson = async (req, res, next) => {
	const { name } = req.body;
	if (!name) return next(res.json({ error: "name is required" }));

	// Check if person already exists
	const personExists = await Person.findOne({ name: name }).catch((err) => console.error(err));
	if (personExists) return next(res.status(400).json({ error: "Person already exists" }));

	// Create new person
	const newPerson = new Person({ name });
	const person = await newPerson.save().catch((err) => console.error(err));
	if (person) {
		return next(res.status(201).json(person));
	} else return next(res.status(400).json({ error: "Error creating person" }));
};

exports.updatePerson = async (req, res, next) => {
	const { name } = req.body;
	if (!name) return next(res.json({ message: "name is required" }));

	// Check if person exists
	const person = await Person.findById(req.params.id).catch((err) => console.error(err));
	if (!person) return next(res.status(404).json({ error: "Person not found" }));

	// Update person
	person.name = name;
	const updatedPerson = await person.save().catch((err) => console.error(err));
	if (updatedPerson) {
		return next(res.status(200).json({ message: "Person updated successfully" }));
	} else return next(res.status(400).json({ error: "Error updating person" }));
};

exports.deletePerson = async (req, res, next) => {
	const person = await Person.findOneAndDelete({ _id: req.params.id }).catch((err) => console.error(err));
	if (!person) {
		return next(res.status(404).json({ error: "Person not found" }));
	}
	return next(res.status(200).json({ message: "Person deleted successfully" }));
};
