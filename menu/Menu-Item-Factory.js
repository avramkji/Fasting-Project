const MenuItem = require('./Menu-Item')
const DataService = require('../data/Data-Service')


class MenuItemFactory {
    constructor() {}

    create(name, handler) {
        return new MenuItem(name, handler);
    }

    async createBulk() {
        try {
            let menus = await new DataService().read("menu");
            return menus.map(item => {
                return this.create(item.name, item.handler)
            })
        } catch (error) {
            console.log("Menu-Item-Factory createBulk(): ", error);
        }
    }


}


module.exports = MenuItemFactory