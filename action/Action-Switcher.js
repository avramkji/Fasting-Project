const CheckStatusAction = require("./Check-Status-Action");
const StartFastingAction = require("./Start-Fasting-Action");
const StopFastingAction = require("./Stop-Fasting-Action");
const ListAllFastsAction = require("./List-All-Fasts-Action");

class ActionSwitcher {
	constructor() {}

	async startAction(menuObjects, action) {
		switch (menuObjects[action - 1].handler) {
			case "1":
				await new CheckStatusAction().chackStatus();
				break;
			case "2":
				await new StartFastingAction().startFastingAction();
				break;
			case "3":
				await new StopFastingAction().stopFastingAction();
				break;
			case "4":
				// updateFastingAction();
				console.log("updateFastingAction()");
				break;
			case "5":
				await new ListAllFastsAction().listAllFastsAction();
				break;
		}
	}
}

module.exports = ActionSwitcher;
