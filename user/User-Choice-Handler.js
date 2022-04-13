const MenuPrintConsole = require("../menu/Menu-Print-Console");
const InputOutput = require("../input-output/Input-Output");
const AnswerValidator = require("../input-output/Answer-Validator");
const ActionSwitcher = require("../action/Action-Switcher");
const MenuGenerator = require("../menu/Menu-Generator")

class UserChoiceHandler {
	constructor() {}

	async process() {
		const printMenu = await new MenuPrintConsole().menuToPrint();
        const inputOutput = new InputOutput()
		let answer = await inputOutput.question(printMenu);
		inputOutput.close();
		let answerValidation = await new AnswerValidator().validateMenuChoice(
			printMenu,
			answer
		);

		if (answerValidation) {
            let menuObjects = await new MenuGenerator().getMenus();
            // console.log(menuObjects)
			await new ActionSwitcher().startAction(menuObjects, answer);
		}
        
	}
}

module.exports = UserChoiceHandler;
