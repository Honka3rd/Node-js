const yargs = require("yargs");
const { readANote, addNote, removeNote, listAll } = require("./notes");

yargs.command({
	command: "add",
	describe: "create a new note",
	builder: {
		title: {
			describe: "add a title",
			type: String,
			demandOption: true
		},
		body: {
			describe: "add a body",
			type: String,
			demandOption: true
		}
	},
	handler: function(argv) {
		addNote(argv.title, argv.body);
	}
});

yargs.command({
	command: "remove",
	describe: "removing a note",
	builder: {
		title: {
			describe: "remve a note",
			type: String,
			demandOption: true
		}
	},
	handler: function(argv) {
		removeNote(argv.title);
	}
});

yargs.command({
	command: "list",
	describe: "list all notes",
	handler: function() {
		listAll();
	}
});

yargs.command({
	command: "read",
	describe: "read a note",
	builder: {
		title: {
			describe: "ok, let's read",
			demandOption: true, // must provide --title as an arg
			type: String // change title type from boolean to string :--title="......"
		}
	},
	handler: function(argv) {
		readANote(argv.title);
	}
});

// apply all configuation
yargs.parse();
