const prompts = require("prompts");

function createTable(number) {
    const spacing = "   ";
    const max = 10;
    const min = 1;
    const defaultArray = ["X"];

    // array 1-10
    for (let i = min; i <= max; i++) {
        defaultArray.push(i)
    }

    const rows = [];
    // create rows, if 0 creates X to 10 row, if not create other rows with number multiplication
    for (let i = 0; i <= max; i++) {
        let aux = "";
        if (i === 0) {
            for (let j = 0; j <= max; j++) {
                aux += `${defaultArray[j]}${spacing}`;
            }
        } else {
            aux += `${number}${spacing}`;
            for (let j = min; j <= max; j++) {
                aux += `${defaultArray[j] * number}${spacing}`;
            }
        }
        rows.push(aux)
    }

    // transform array on string and broke lines
    return rows.join("\n");
}

async function run() {
    const response = await prompts({
        type: 'text',
        name: 'answer',
        message: 'Enter a number to create a table 1-10:'
    });

    if(isNaN(Number(response.answer))) {
        return console.log("Enter a valid number!");
    }

    console.log(createTable(response.answer));
}

module.exports = run;