const prompts = require("prompts");

function vowelCount(phrase) {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    [...phrase].forEach((char) => {
        if(vowels.find((vowel) => vowel === char)) {
            count++;
        }
    })

    return count;
}

async function run() {
    const response = await prompts({
        type: 'text',
        name: 'answer',
        message: 'Enter a sentence:'
    });

    console.log("Vowel count: ", vowelCount(response.answer));
}

module.exports = run;