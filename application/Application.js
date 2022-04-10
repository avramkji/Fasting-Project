const UserChoiceHandler = require("../user/User-Choice-Handler");

class Application {
	constructor() {
		new UserChoiceHandler().process()
	}


	// async start(){
	// 	const userChoiceHandler = await new UserChoiceHandler
	// 	userChoiceHandler.process()
	// }
}


module.exports = Application