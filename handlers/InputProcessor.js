// Custom Modules
const FastFactory = require('../models/FastFactory')

class InputProcessor {
    constructor(){
        this.menus = "1.Check Status\n2.Start Fasting\n3.Stop Fasting\n4.Update Fasting\n5. List all Fasts\n"
    }
    
    // Methods
    checkStatus(){
        // const fastFactory = new FastFactory;
        // fastFactory.loadFasts()
    }

    // Getters
    getMenus(){
        return this.menus;
    }

}


module.exports = InputProcessor;