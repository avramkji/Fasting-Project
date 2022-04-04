// Custom Modules
const FastFactory = require('../models/FastFactory')

class InputProcessor {
    constructor(){
        this.rl = require('../index').rl;
        this.question = require('../index').question;

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

        return new Promise((resolve, reject) => {
            fastFactory.createBulk()
                .then(fasts => {
                    resolve(fasts);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    getMenus(){
        return new Promise((resolve, reject) => {
            this.fetchState()
                .then(state => {
                    // resolve(state)
                    if(state.length > 0 && state.filter(fast => fast.active).length > 0){
                        this.menus.splice(1,1)
                    } else {
                        this.menus.shift()
                        this.menus.splice(1,1)
                        this.menus.splice(1,1)
                    }
                    let menus = []
                    for(let i = 0; i < this.menus.length; i++){
                        // push items onto menus
                        let menuItem = {
                            "name": `${i+1}. ${this.menus[i].name}`,
                            "handler": this.menus[i].handler
                        }

                        menus.push(menuItem);
                    }

                    resolve(menus)
                })
                .catch(error => {
                    console.log("error in getMenus inputProcessor")
                    reject(error)
                })
            // console.log("fetchedFasts", fasts)
        })
    }

    getDuration() {
        return new Promise((resolve, reject) => {
            this.rl.question("Enter duration of fasting (Example: 1): ", (answer) => {
                if(answer.match(/^\d+$/)){
                    console.log(answer)
                    resolve(answer);
                }
                reject(null);
            })
        })
    }

}


module.exports = InputProcessor;