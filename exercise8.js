const prompts = require("prompts");

function calcFinalInvestment({
    initCapital,
    interestRate,
    investmentTime
}) {
    return (initCapital * (1 + ((interestRate / 100) * investmentTime / 12)))
}

async function run() {
    const subject = await prompts([{
        type: 'text',
        name: 'initCapital',
        message: 'Enter the initial capital:'
    }, {
        type: 'text',
        name: 'interestRate',
        message: 'Enter the interest rate % [0~100]:'
    }, {
        type: 'text',
        name: 'investmentTime',
        message: 'Enter the investment time in months:'
    }]);

    const initCapital = Number(subject.initCapital);
    const interestRate = Number(subject.interestRate);
    const investmentTime = Number(subject.investmentTime);

    if (isNaN(initCapital)) {
        return console.log("Initial capital needs to be a number");
    }

    if (isNaN(interestRate)) {
        return console.log("Interest rate needs to be a number");
    }

    if (isNaN(investmentTime)) {
        return console.log("Investment time needs to be a number");
    }

    if (interestRate < 0 || interestRate > 100) {
        return console.log("Interest rate needs to be between 0 and 100");
    }

    console.log("Your final investment value is:", calcFinalInvestment({
        initCapital,
        interestRate,
        investmentTime
    }));
}

module.exports = run;