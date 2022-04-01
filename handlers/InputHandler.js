// Custom Modules
const FastFactory = require('../models/FastFactory')

class InputProcessor {
    constructor(){

        this.menus = [
            {
                "name": "Check Status\n",
                "handler": 1
            },
            {
                "name": "Start Fasting\n",
                "handler": 2
            },
            {
                "name": "Stop Fasting\n",
                "handler": 3
            },
            {
                "name": "Update Fasting\n",
                "handler": 4
            },
            {
                "name": "List all Fasts\n",
                "handler": 5
            }
        ]
    }

    fetchState(){
        let fastFactory = new FastFactory();
        let fasts = fastFactory.createBulk();

        return fasts;
    }

    getMenus(){
        let fasts = this.fetchState(); // get all fats 

        if( fasts.filter(fast => fast.active).length > 0 ){ // if there are active Fasts
            this.menus.splice(1,1); // remove Start Fasting
        } else { // otherwise 
            // remove all elements except start fasting and list all fasts
            // remove check status
            this.menus.shift();
            // remove stop fast
            this.menus.splice(1,1);
            // remove update fast
            this.menus.splice(1,1);
        }

        let menus = [];

        for(let i = 0; i < this.menus.length; i++){
            // push items onto menus
            let menuItem = {
                "name": `${i+1}. ${this.menus[i].name}`,
                "handler": this.menus[i].handler
            }

            menus.push(menuItem);
        }

        this.menus = menus;

        return menus;
    }


}


module.exports = InputProcessor;