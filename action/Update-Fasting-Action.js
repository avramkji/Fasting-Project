const InputOutput = require("../input-output/Input-Output");
const FastFactory = require("../fast/Fast-Factory");
const DataService = require("../data/Data-Service");

class UpdateFastingAction {
  constructor() {
    this.months = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ];
    this.fastChoice = ["1", "2", "3", "4"];
    this.fastTypes = [16, 18, 20, 36];
  }

  async updateFastingAction() {
    // Enter Month
    const inputOutput = new InputOutput();
    const month = await inputOutput.question(
      "Enter the month of your fast: \n"
    );

    if (this.months.includes(month.toLowerCase())) {
      // Enter Day of the month
      const dayOfMonth = await inputOutput.question(
        "Enter the day of month: \n"
      );

      if (dayOfMonth > 0 && dayOfMonth <= 31) {
        // Enter the time when the fast has started (00:00 - 24:00):
        const time = await inputOutput.question(
          "Enter the time when the fast has started (00:00 - 24:00): \n"
        );
        if (time.includes(":")) {
          const hours = time.split(":")[0];
          const minutes = time.split(":")[1];
          if (hours <= 24 && hours >= 0 && minutes <= 59 && minutes >= 0) {
            console.log("Legit hours and minutes");

            // Enter the duration of the fast (16, 18, 20, 36)
            const durationChoice = await inputOutput.question(
              "1. 16 hour fast\n2. 18 hour fast\n3. 20 hour fast\n4. 36 hour fast\n"
            );

            if (this.fastChoice.includes(durationChoice)) {
              // Recalculate end date of the updated fast

              const duration = this.fastTypes[durationChoice - 1];

              const start = new Date(
                `${month} ${dayOfMonth}, ${new Date().getFullYear()} ${hours}:${minutes}`
              );
              const end = new Date();
              end.setTime(start.getTime() + duration * 60 * 60 * 1000);

              const fasts = await new FastFactory().createBulk();

              // Find last active fast and update it.
              const fast = fasts.pop();

              fast.start = start;
              fast.end = end;
              fast.duration = duration.toString();

              fasts.push(fast);
              await new DataService().write(fasts);

              //   console.log("Your current fast has been updated: ", fast)
            }
          }
        } else {
          console.log("Invalid input");
        }
      } else {
        console.log("Invalid input");
      }
    } else console.log("Invalid input");
    inputOutput.close();
  }
}

module.exports = UpdateFastingAction;
