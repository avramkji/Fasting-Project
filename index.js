// Core modules
const readline = require('readline');
const util = require('util');

// Server Modules
const InputProcessor = require('./handlers/InputProcessor');
const ChoiceProcessor = require('./handlers/ChoiceProcessor');

// readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const question = util.promisify(rl.question).bind(rl);


const choiceProcessor = new ChoiceProcessor();
const inputProcessor = new InputProcessor();

async function main() {

    let menuObjects = inputProcessor.getMenus()
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