const FastFactory = require('../models/FastFactory');

class ChoiceProcessor { // strategy pattern
    constructor() {}

    process(choice, menuObjects) {

        if(choice > menuObjects.length || choice < 1 || isNaN(choice)) {
            console.log("Invalid option")
        } 
        else {
            
            switch(menuObjects[choice - 1].handler) {
                case 1:
                    this.checkStatusHandler();
                    break;
                case 2:
                    this.startFastingHandler();
                    break;
                case 3:
                    this.stopFastingHandler();
                    break;
                case 4:
                    this.updateFastingHandler();
                    break;
                case 5:
                    this.listAllFastsHandler();
                    break;
            }

        }
    }

    checkStatusHandler() {
        let fastFactory = new FastFactory();
        fastFactory.createBulk()
            .then(fasts => {
                fasts.forEach(fast => {
            
                    if(fast.active) { // checking for active fast
                        let nowDateUTC = (new Date()).toISOString()
                        
                        if(fast.end <= nowDateUTC) { // the fasting has already ended
                            fast.active = false;
        
                            console.log("Your last fast has already ended. Here are the details:")
                            // gets utc time string, converts to local time string and prints to console
                            console.log("Start time: ", new Date(fast.start).toString()) 
                            console.log("End time: ", new Date(fast.end).toString())
        
                            console.log(`Hours spent in fasting: ${(new Date(fast.end).getHours())-(new Date(fast.start).getHours())}`)
        
                            // [] - Update the values in the db
                            
        
                        }
                        else { // the fasting is still active
        
                            console.log("You have an ongoing fast:")
                            console.log("Start time: ", new Date(fast.start).toString()) 
                            console.log("End time: ", new Date(fast.end).toString())
                            console.log(`Hours elapsed: ${(new Date(nowDateUTC).getHours())-(new Date(fast.start).getHours())}`)
                            
                        }
                    } 
        
                });
            })
            .catch(error => {
                console.log(error)
            })
    }

    startFastingHandler() {
        console.log("Start Fasting Handler")
    }

    stopFastingHandler() {
        console.log("Stop Fasting Handler")
    }

    updateFastingHandler() {
        console.log("Update Fasting Handler")
    }

    listAllFastsHandler() {
        console.log("List all Fasts Handler")
    }
    

}



module.exports = ChoiceProcessor;