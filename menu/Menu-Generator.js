const MenuItemFactory = require("./Menu-Item-Factory");
const FastFactory = require("../fast/Fast-Factory");

class MenuGenerator {
	constructor() {}
	
	// getMenus will generate a menu according to current state
	// It returns an array of objects
	async getMenus() {
		try {
			let menuObjectsArray = await new MenuItemFactory().createBulk();
			let fastObjectsArray = await new FastFactory().createBulk();
			
			let activeFast = []

			fastObjectsArray.map((fast) => {
				if(fast.active) activeFast.push(fast)
			});
			
			if (activeFast.length > 0) {
				menuObjectsArray.splice(1, 1);
			} else {
				menuObjectsArray.shift();
				menuObjectsArray.splice(1, 1);
				menuObjectsArray.splice(1, 1);
			}

			return menuObjectsArray.map((item, index) => {
				return {
					name: `${index + 1}. ${item.name}`,
					handler: item.handler,
				};
			});
		} catch (error) {
			console.log("Menu-Generator getMenus(): ", error);
		}
	}
}

module.exports = MenuGenerator;
