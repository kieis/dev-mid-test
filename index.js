const prompts = require("prompts");

(async () => {
    const platform = await prompts({
        type: "select",
        name: "selectedExercise",
        message: "Select an exercise to run:",
        choices: [
            {
                title: "Exercise 1: Simple Calculator",
                value: 1,
            },
            {
                title: "Exercise 2: Prime Numbers",
                value: 2,
            },
            {
                title: "Exercise 3: Factorial",
                value: 3,
            },
            {
                title: "Exercise 4: Palindrome",
                value: 4,
            },
            {
                title: "Exercise 5: Table",
                value: 5,
            },
            {
                title: "Exercise 6: Vowel Counter",
                value: 6,
            },
            {
                title: "Exercise 7: Grade Average",
                value: 7,
            },
            {
                title: "Exercise 8: Interest Calculation",
                value: 8,
            },
        ],
    });

    if (!platform.selectedExercise) {
        process.exit();
    }

    require(`./exercise${platform.selectedExercise}.js`)();
})();