const prompts = require("prompts");

// factorial function
function factorial(number) {
    let i = 1;

    for (; number > 1; number--) {
        i = i * number;
    }

    return i;
}

async function run() {
    const response = await prompts({
        type: 'text',
        name: 'answer',
        message: 'Enter a number:'
    });

    if(isNaN(Number(response.answer))) {
        return console.log("Enter a valid number!");
    }

    console.log(`The factorial of ${response.answer} is:`, factorial(response.answer));
}

module.exports = run;