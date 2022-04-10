const Fast = require("./Fast");
const DataService = require("../data/Data-Service");

class FastFactory {
	constructor() {}

	create(start, duration, end, active) {
		return new Fast(start, duration, end, active);
	}

	async createBulk() {
		try {
			const res = await new DataService().read("db");
			return res.map((fast) => {
				const { start, duration, end, active } = fast;
				return this.create(start, duration, end, active);
			});
		} catch (error) {
			console.error("Fast-Factory => createBulk(): ", error);
			return [];
		}
	}
}

module.exports = FastFactory;