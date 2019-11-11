const fs = require("fs");
const Axios = require("axios");

const getJSON = Axios.create({
	baseURL: "https://jsonplaceholder.typicode.com/"
});

async function getPosts() {
	const res = await getJSON.get("posts");
	for (let key in res) {
		const arr = res[key];
		for (let i = 0; i < arr.length; i++) {
			const obj = arr[i];
			for (let innerKey in obj) {
				fs.appendFileSync("note.txt", `${innerKey}:${obj[innerKey]}\n`);
			}
			fs.appendFileSync("note.txt", "\n\r");
		}
	}
}

getPosts().then(function() {
	read();
}).catch(err=>console.log(err));

function read() {
	let arr = [];
	fs.readFile("note.txt", "utf8", function(err, data) {
		if (err) throw err;
		const raw = data.split("\n\r");
		for (let i = 0; i < raw.length; i++) {
			let element = {
				userId: "",
				id: "",
				title: "",
				body: ""
			};

			if (raw[i] && raw[i].includes(":")) {
				if (
					!raw[i].includes("userId") ||
					!raw[i].includes("id") ||
					!raw[i].includes("title") ||
					!raw[i].includes("body")
				) {
					continue;
				}
			}

			if (raw[i] && raw[i].includes("userId")) {
				const innerAry = raw[i].split("\n");

				element.userId = innerAry[0].split(":")[1];
                element.id = innerAry[1].split(":")[1];
                element.title = innerAry[2].split(":")[1];
                element.body = innerAry[3].split(":")[1];

                for(let j=4; j<innerAry.length; j++){
                    element.body += " "+innerAry[j]
                }

                arr.push(element);
			}
        }

        const json = JSON.stringify(arr);
        fs.writeFileSync("data.json", json);
		fs.writeFileSync("note.txt", '');

		// buffer to string
		const str = fs.readFileSync("data.json").toString();
		// parse a string to an js object
		const parsed = JSON.parse(str);
		console.log(parsed);
	});
}
