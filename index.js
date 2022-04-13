const UserChoiceHandler = require("./user/User-Choice-Handler");
const Application = require('./application/Application');

(async () => {

	await new UserChoiceHandler().process();

})();
