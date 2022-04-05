const FastFactory = require('../models/FastFactory');
const DatabaseConnection = require('../models/DatabaseConnection');
const InputProcessor = require('./InputProcessor.js');

class ChoiceProcessor { // strategy pattern
    constructor() {
        // declare here FastFactory and DatabaseConnection?
    }

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
        let databaseConnection = new DatabaseConnection();

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
        
                            // [x] - Update the values in the db
                            databaseConnection.writeToDB(fasts)
                                .then(data => {
                                    // console.log("Successfully updated the database: ", data)
                                })
                                .catch(err => {
                                    console.log("Error updating the database:", err)
                                })
        
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
        const inputProcessor = new InputProcessor();
        let fastFactory = new FastFactory();
        let databaseConnection = new DatabaseConnection();


        inputProcessor.getDuration()
            .then(duration => {
                console.log("Duration: ", duration)
                
                    
                const start = new Date();
                const end = new Date();
                end.setTime(end.getTime() + (duration *60*60*1000));

                fastFactory.createBulk()
                    .then(fasts => {
                        let newFast = {
                            start: start,
                            duration: duration,
                            end: end,
                            active: true
                        }
                        fasts.push(newFast);
                        databaseConnection.writeToDB(fasts)    
                        console.log("Fasting started");
                    })
                    .catch(error => {
                        console.log(error)
                    })

            })
            .catch(error => {
                console.log(error)
            })
    }

    stopFastingHandler() {
        console.log("Stop Fasting Handler")
        
    }

    updateFastingHandler() {
        console.log("Update Fasting Handler")
    }

    listAllFastsHandler() {
        console.log("List all Fasts Handler")
        // [x] - list all fasts
        let fastFactory = new FastFactory();

        fastFactory.createBulk()
            .then(fasts => {
                console.log("Following is a detailed list of all fasts (past and present):\n")
                if(fasts.length < 1) return console.log("You haven't fasted at all.")

                fasts.forEach(fast => {
                    console.log("Started at: ", new Date(fast.start).toString())
                    console.log((fast.active ? "To end at: " : "Ended at: "), new Date(fast.end).toString())
                    console.log("Duration of fast: ", fast.duration)
                    console.log("Status: ", fast.active ? "Active" : "Done", "\n")
                });
            })
            .catch(error => {
                console.log(error)
            })
    }
    

}



module.exports = ChoiceProcessor;