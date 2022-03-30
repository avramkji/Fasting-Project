// Core modules
const readline = require('readline');

// Server Modules
const InputProcessor = require('./handlers/InputProcessor');

// readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inputHandler = new InputProcessor();

rl.question(inputHandler.getMenus(), (answer) => {

    switch(answer){
        case '1': // Check Status
            // inputHandler.checkStatus()
            break;
        case '2': // Start a Fast

            break;
        case '3': // Stop an active Fast

            break;
        case '4': // Update an active Fast
            
            break;
        case '5': // List all Fasts
            
            break;
        default:
            
            break;
    }

})