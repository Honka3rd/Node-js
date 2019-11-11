const fs = require("fs");
const chalk = require("chalk");
const positive = chalk.green.inverse;
const negative = chalk.red.inverse;
const style = {
	positive,
	negative
};

const loadAll = function() {
	try {
		const dataBuffer = fs.readFileSync("noteRecord.json");
		const dataStr = dataBuffer.toString();
		return JSON.parse(dataStr);
	} catch (error) {
		return [];
	}
};

const save = function(noteStore) {
	fs.writeFileSync("noteRecord.json", JSON.stringify(noteStore));
};

const readANote = function(title) {
    const all = loadAll();
    const find = all.find((note)=>{
        return note.title === title;
    })

    if(find){
        console.log(style.positive(`${title}:`), `${find.body}`);
    } else {
        console.log(style.negative("no such note"));
    }
};

const listAll = function() {
    const all = loadAll();
    if(all.length === 0){
        console.log(style.negative("No note"));
    } else {
        for(let note of all){
            console.log(style.positive(note.title));
        }
    }
};

const addNote = function(title, body) {
	const updated = { title, body };
	const all = loadAll();
	const duplicates = all.filter((el) => {
		return title === el.title;
	});

	if (duplicates.length === 0) {
		all.push(updated);
		save(all);
		console.log(style.positive(`${title} has been added`));
	} else {
		console.log(style.negative("This note is existing"));
	}
};

const removeNote = function(title) {
	const all = loadAll();
	const find = all.filter((el) => {
		return el.title === title;
	});

	if (find.length !== 0) {
		all.splice(all.indexOf(find[0]), 1);
		save(all);
		console.log(style.positive(`${find[0].title} has been removed`));
	} else {
		console.log(style.negative("No item found"));
	}
};

module.exports = {
	readANote,
	addNote,
    removeNote,
    listAll
};
