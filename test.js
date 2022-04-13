// Server Modules
const MenuGenerator = require("./menu/Menu-Generator");
const DataService = require("./data/Data-Service");
const FastFactory = require("./fast/Fast-Factory");
const InputOutput = require("./input-output/Input-Output");
const MenuItemFactory = require("./menu/Menu-Item-Factory");
const MenuPrintConsole = require("./menu/Menu-Print-Console");
const UserChoiceHandler = require("./user/User-Choice-Handler");
const Application = require('./application/Application');

(async () => {
	// let menuItems = await new MenuItemFactory().createBulk();
	// console.log(menuItems)

	// let menus = await new MenuGenerator().getMenus();
	// console.log(menus)

	// let fasts = await new MenuGenerator().getMenus();
	// console.log(fasts)

	// let menu = await new MenuPrintConsole().menuToPrint();
	// console.log(menu)

	// let data = await new DataService().read()
	// console.log(data)

	// let fasts = await new FastFactory().createBulk();
	// console.log(fasts);

	// let answer = await new InputOutput().question("Dali ti odi dobro?\n")
	// console.log(answer)
	// new InputOutput().close();

	await new UserChoiceHandler().process();

})();
