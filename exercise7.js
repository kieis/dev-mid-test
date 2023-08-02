const prompts = require("prompts");

function averageGrade(grade) {
    const sum = grade.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return (sum / grade.length).toFixed(2);
}

async function run() {
    const subjectCount = 3;
    const subjects = [];

    for (let i = 0; i < subjectCount; i++) {
        const subject = await prompts({
            type: 'text',
            name: 'name',
            message: 'Enter a subject:'
        });

        const { name } = subject;
        if (name) {
            let skip = false;
            const grades = [];
            while (!skip) {
                const grade = await prompts({
                    type: 'text',
                    name: 'value',
                    message: 'Enter grade value or n to skip:'
                });

                if (!grade.value) {
                    process.exit(1);
                }

                if (grade.value === "n") {
                    skip = true;
                    continue;
                } else {
                    if (isNaN(Number(grade.value))) {
                        console.log("Invalid grade value");
                        continue;
                    }
                }

                grades.push(Number(grade.value));
            }

            subjects.push({
                name,
                grades
            })
        }
    }

    subjects.forEach((subject) => {
        console.log(`Subject => ${subject.name} | Average =>`, averageGrade(subject.grades));
    })
}

module.exports = run;