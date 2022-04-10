const FastFactory = require("../fast/Fast-Factory");

class ListAllFastsAction {
	constructor() {}

	async listAllFastsAction() {
		const fasts = await new FastFactory().createBulk();

		console.log(
			"Following is a detailed list of all fasts (past and present): \n"
		);

		if (fasts.length < 1)
			return console.log("You haven't started fasting yet.");

		fasts.forEach((fast) => {
			console.log("Started at : ", new Date(fast.start).toString());
			console.log(
				fast.active ? "To end at: " : "Ended at: ",
				new Date(fast.end).toString()
			);
			console.log("Duration of fast: ", fast.duration);
			console.log("Status: ", fast.active ? "Active" : "Done", "\n");
		});
	}
}

module.exports = ListAllFastsAction;
