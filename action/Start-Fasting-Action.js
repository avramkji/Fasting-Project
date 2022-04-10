const InputOutput = require("../input-output/Input-Output");
const FastFactory = require("../fast/Fast-Factory");
const DataService = require("../data/Data-Service");
const UserChoiceHandler = require("../user/User-Choice-Handler");

class StartFastingAction {
	constructor() {}

	async startFastingAction() {
		const inputOutput = new InputOutput();
		const duration = await inputOutput.question(
			"Enter duration of fasting (i.e 12): "
		);
		inputOutput.close();

		const start = new Date();
		const end = new Date();
		end.setTime(end.getTime() + duration * 60 * 60 * 1000);

		const fasts = await new FastFactory().createBulk();

		const newFast = {
			start: start,
			duration: duration,
			end: end,
			active: true,
		};

		fasts.push(newFast);

		await new DataService().write(fasts);
	}
}

module.exports = StartFastingAction;
