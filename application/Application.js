const UserChoiceHandler = require("../user/User-Choice-Handler");

class Application {
	constructor() {
		new UserChoiceHandler().process()
	}
}


module.exports = Application