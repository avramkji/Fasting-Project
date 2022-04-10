const readline = require("readline");
const util = require("util");

class InputOutput {
	constructor() {
		this.rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		});

		this.question = util.promisify(this.rl.question).bind(this.rl);
	}

	question(question) {
		return this.question(question);
	}

	close() {
		this.rl.close();
	}

    output(content){
        this.rl.output.write(content);
    }
}

module.exports = InputOutput;
