const MenuGenerator = require("./Menu-Generator");

class MenuPrintConsole {
	constructor() {}

	async menuToPrint() {
		let menu = await new MenuGenerator().getMenus();
        let stringMenu = ""
		for(let i = 0; i<menu.length; i++){
            stringMenu+=menu[i].name
        }
        return stringMenu
	}
}

module.exports = MenuPrintConsole;
