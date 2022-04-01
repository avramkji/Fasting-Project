class ChoiceProcessor { // strategy pattern
    constructor() {}

    process(choice, menuObjects) {
        // console.log('processed')
        if(choice > menuObjects.length || choice < 1 || isNaN(choice)) {
            console.log("Invalid option")
        } 
        else {

            console.log("It works", menuObjects[choice - 1]);
        }

        
        
        
        

    }


}



module.exports = ChoiceProcessor;