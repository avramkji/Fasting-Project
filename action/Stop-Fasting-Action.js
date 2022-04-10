const InputOutput = require("../input-output/Input-Output");
const FastFactory = require("../fast/Fast-Factory");
const DataService = require('../data/Data-Service')
const Application = require('../application/Application')

class StopFastingAction {
	constructor() {}

	async stopFastingAction() {
		const inputOutput = new InputOutput();

		const answer = await inputOutput.question(
			"Are you sure you want to stop your fast?\n1.Yes\n2.No\n"
		);
        inputOutput.close()
        const fasts = await new FastFactory().createBulk();
		if (answer == 1) {

			fasts.forEach((fast) => {
				if (fast.active) {
					fast.active = false;
					fast.end = new Date().toISOString();
					fast.duration =
						new Date(fast.end).getHours() - new Date(fast.start).getHours();
					fast.duration = fast.duration.toString();
				}
			});

            await new DataService().write(fasts)
            
		} else {
            console.log("Try again.\n")
        }
        // new Application()
	}
}

module.exports = StopFastingAction;
