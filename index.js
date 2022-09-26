const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const html = require("./src/generatedHTML.js");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// PROMISES //
const writeFileAsync = util.promisify(fs.writeFile);

// ARRAYS //
var teamWrite = ``;
var teamArray = [];

async function prompt() {
    let done = "";
    do {

        try {

            console.log(`Hi! \nPlease follow the prompts to create a new employee.`);
            let response = await inquirer.prompt([
                {
                    type: "input",
                    name: "eName",
                    message: "name of the new employee?",
                },
                {
                    type: "input",
                    name: "eID",
                    message: "Enter the employee's ID.",
                },
                {
                    type: "input",
                    name: "eMail",
                    message: "Enter the employee's email address.",
                },
                {
                    type: "list",
                    name: "eRole",
                    message: "What is the employee's new role?",
                    choices: [
                        "Engineer",
                        "Intern",
                        "Manager",
                    ]
                }
            ]);
            let roleSelected = "";
            if (response.eRole === "Engineer") {
                roleSelected = await inquirer.prompt([{
                    type: "input",
                    name: "putIn",
                    message: "What is the GitHub username of the new Engineer?",
                },
                ]);
                const engineer = new Engineer(response.eName, response.eID, response.eMail, roleSelected.putIn);

                teamArray.push(engineer)
                console.log(teamArray);


            } else if (response.eRole === "Intern") {
                roleSelected = await inquirer.prompt([{
                    type: "input",
                    name: "putIn",
                    message: "Where is the new Intern attending school?",
                },
                ]);
                const intern = new Intern(response.eName, response.eID, response.eMail, roleSelected.putIn);

                teamArray.push(intern);
                console.log(teamArray);


            } else if (response.eRole === "Manager") {
                roleSelected = await inquirer.prompt([{
                    type: "input",
                    name: "putIn",
                    message: "What is Office Number of the new Manager?",
                },
                ]);
                const manager = new Manager(response.eName, response.eID, response.eMail, roleSelected.putIn);
                teamArray.push(manager);
                console.log(teamArray);

            }
        } catch (err) {
            return console.log(err, `Error. Warning Will Robinson.`);
        }
        done = await inquirer.prompt([{
            //  if another employee needs to be created
            type: "list",
            name: "uDone",
            message: "Would you like to add more employees?",
            choices: [
                "Yes",
                "No",
            ]
        },]);
    } while (done.uDone === "Yes");
};

async function init() {
    try {
        await prompt()

        // loops through team array, writes card to html
        for (let i = 0; i < teamArray.length; i++) {
            teamWrite = teamWrite + html.makeEmpCards(teamArray[i]);
        }

        let finalHTML = html.generatedHTML(teamWrite);
        writeFileAsync("./dist/generatedHTML.html", finalHTML);
        console.log(`TEAM PROFILE GENERATOR \nHTML Generated: generatedHTML.html`);

    } catch (err) {
        return console.log(err, `Error - Warning Will Robinson.`);
    }
};

init();