// calculator function
function calculator({
    firstNumber,
    secondNumber,
    operator
}) {
    //tries casting input numbers in string cases
    const parsedFirst = Number(firstNumber);
    const parsedSecond = Number(secondNumber);

    if (isNaN(parsedFirst) || isNaN(parsedSecond)) {
        return "Input needs to be a number";
    }

    const isValidOperator = (operator) => ["+", "-", "*", "/"].find((currentOperator) => currentOperator === operator)
    if (!isValidOperator(operator)) {
        return "Invalid operator, accepts only +, -, * and /";
    }

    return eval(`${parsedFirst} ${operator} ${parsedSecond}`);
}

function run() {
    console.log("4 / 2 equals:", calculator({
        firstNumber: 4,
        secondNumber: 2,
        operator: "/"
    }));
}

module.exports = run;