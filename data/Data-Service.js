const fs = require("fs").promises;

class DataService {
	constructor() {}

	async read(filename) {
		try {
			const res = await fs.readFile(`core/${filename}.json`, "utf-8");
			return JSON.parse(res);
		} catch (error) {
			console.log("Data-Service -> read(): ", error);
		}
	}

	async write(newFasts) {
		try {
			const res = await fs.writeFile("core/db.json", JSON.stringify(newFasts));
			if (res) console.log("Successfully Written to File.\n");
		} catch (error) {
			console.err("Data-Service => write(newFasts): ", error);
		}
	}
}

module.exports = DataService;
