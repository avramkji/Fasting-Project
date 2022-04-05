// Core modules
const readline = require("readline");
const util = require("util");

// Server Modules
const InputProcessor = require("./handlers/InputProcessor");
const ChoiceProcessor = require("./handlers/ChoiceProcessor");

// readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const question = util.promisify(rl.question).bind(rl);

const choiceProcessor = new ChoiceProcessor();
const inputProcessor = new InputProcessor();

async function main() {
  inputProcessor
    .getMenus()
    .then((menuObjects) => {
      console.log("menuObjects", menuObjects);
      let menu = "";

      for (let i = 0; i < menuObjects.length; i++) {
        menu += menuObjects[i].name;
      }

      question(menu)
        .then((choice) => {
          console.log("getMenus in index: ");

          choiceProcessor.process(choice, menuObjects);

          // rl.close();
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log("getMenus error in index", error);
    });
}

main();

module.exports = {
  rl,
  question,
};
