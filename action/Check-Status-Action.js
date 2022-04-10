const InputOutput = require("../input-output/Input-Output");
const FastFactory = require("../fast/Fast-Factory");
const DataService = require("../data/Data-Service");

class CheckStatusAction {
	constructor() {}

	async chackStatus() {
		const res = await new FastFactory().createBulk();

		res.forEach((fast) => {
			let nowDateUTC = new Date().toISOString();

			if (fast.end <= nowDateUTC) {
				fast.active = false;

				console.log("Your last fast has already ended. Here are the details:");
				console.log("Start time: ", new Date(fast.start).toString());
				console.log("End time: ", new Date(fast.end).toString());

				console.log(
					`Hours spent in fasting: ${
						new Date(fast.end).getHours() - new Date(fast.start).getHours()
					}`
				);
				console.log("Status: ", fast.active);
				console.log("\n");

				new DataService().write(res);
			} else {
				console.log("You have an ongoing fast:");
				console.log("Start time: ", new Date(fast.start).toString());
				console.log("End time: ", new Date(fast.end).toString());
				console.log(
					`Hours elapsed: ${
						new Date(nowDateUTC).getHours() - new Date(fast.start).getHours()
					}`
				);
				console.log("Status: ", fast.active);
				console.log("\n");
			}
		});
	}
}

module.exports = CheckStatusAction;
