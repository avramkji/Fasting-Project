const FastFactory = require('../models/FastFactory');

class ChoiceProcessor { // strategy pattern
    constructor() {}

    process(choice, menuObjects) {

        if(choice > menuObjects.length || choice < 1 || isNaN(choice)) {
            console.log("Invalid option")
        } 
        else {

            // console.log("It works", menuObjects[choice - 1]);

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
        // console.log("Check Status Handler:")
        let fastFactory = new FastFactory();
        let fasts = fastFactory.createBulk();

        // [x] - Check if there is any active fast
        // [x] - If there is, check if the end date has passed
        // [x] - If the end date has passed, set the fast to inactive
        //      [x] - Print the Start time, end time and elapsed time of the now finished fast

        fasts.map(fast => { 

            if(fast.active) { // checking for active fast
                let nowDateUTC = new Date()
                let startDateArray = fast.start.split(/[-,:,T]+/g)
                let endDateArray = fast.end.split(/[-,:,T]+/g)

                startDateArray.pop()
                endDateArray.pop()

                
                let endDateUTC = new Date(Date.UTC(endDateArray[0], endDateArray[1] - 1, endDateArray[2], endDateArray[3], endDateArray[4]))
                let startDateUTC = new Date(Date.UTC(startDateArray[0], startDateArray[1] - 1, startDateArray[2], startDateArray[3], startDateArray[4]))

                // console.log(startDateUTC)
                // console.log(endDateUTC)

                if(endDateUTC <= nowDateUTC) { // the fasting has already ended
                    fast.active = false;
                    
                    // taking the start date of fast
                    // converting it to string and CEST timezone and splitting it in parts
                    startDateArray = startDateUTC.toString().split(" ", 5)
                    let startDay = startDateArray[2]
                    let startMonth = startDateArray[1]
                    let startYear = startDateArray[3]
                    let startTime = startDateArray[4]

                    // doing the same for end date
                    endDateArray = endDateUTC.toString().split(" ", 5)
                    let endDay = endDateArray[2]
                    let endMonth = endDateArray[1]
                    let endYear = endDateArray[3]
                    let endTime = endDateArray[4]

                    console.log("Your last fast has already ended. Here are the details:")
                    console.log("Start time: ", startTime, startDay, startMonth, startYear)
                    console.log("End time: ", endTime, endDay, endMonth, endYear) // this gets converted to CEST
                    console.log(`Hours spent in fasting: ${(endDateUTC - startDateUTC) / 3600000}`)
                             
                }
                else { // the fasting is still active
                    // [x] - If the date isn't yet due, print the Start time, end time and elapsed time of the current fast

                    // taking the start date of fast
                    // converting it to string and CEST timezone and splitting it in parts
                    startDateArray = startDateUTC.toString().split(" ", 5)
                    let startDay = startDateArray[2]
                    let startMonth = startDateArray[1]
                    let startYear = startDateArray[3]
                    let startTime = startDateArray[4]

                    // doing the same for end date
                    endDateArray = endDateUTC.toString().split(" ", 5)
                    let endDay = endDateArray[2]
                    let endMonth = endDateArray[1]
                    let endYear = endDateArray[3]
                    let endTime = endDateArray[4]

                    console.log("You have an ongoing fast:")
                    console.log("Start time: ", startTime, startDay, startMonth, startYear)
                    console.log("End time: ", endTime, endDay, endMonth, endYear) // this gets converted to CEST
                    console.log(`Hours elapsed: ${Math.floor((endDateUTC - nowDateUTC) / 3600000)}`)
                    
                }
            } 

        });

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