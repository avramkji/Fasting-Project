// Core modules
const readline = require('readline');
const util = require('util');

// Server Modules
const InputHandler = require('./handlers/InputHandler');
const ChoiceProcessor = require('./handlers/ChoiceProcessor');

// readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const question = util.promisify(rl.question).bind(rl);


const choiceProcessor = new ChoiceProcessor();
const inputHandler = new InputHandler();


// let menus = inputHandler.getMenus()
// console.log(menus)
// console.log(inputHandler.getMenus("handlers"))

async function main() {

    let menuObjects = inputHandler.getMenus()
    let menu = "";

    for(let i = 0; i < menuObjects.length; i++) {
        menu += menuObjects[i].name;
    }

    try {
        const choice = await question(menu);
        choiceProcessor.process(choice, menuObjects);


        rl.close();
    } catch (error) {
        console.log('Error: ', error);
    }
}

main();