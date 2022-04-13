

class AnswerValidator {
    constructor(){}

    // validate answer according to menu options
    async validateMenuChoice(printMenu, answer){
        if(isNaN(answer)) return false
        else if(printMenu.includes(answer)) return true

        return false
    }
}


module.exports = AnswerValidator;