const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function employeeInfo() {
    inquirer.prompt([{
                type: 'input',
                name: "name",
                message: "Employees Name"
            },
            {
                type: 'input',
                name: "email",
                message: "what is their email address?"
            },
            {
                type: 'input',
                name: 'id',
                message: "enter employee ID"
            },
            {
                type: 'list',
                name: 'role',
                message: "Employee's role",
                choices: ["Manager", "Employee", "Engineer", "Intern"]
            }
        ])
        .then(answers => {
            console.log(answers);

            if (answers.role === 'Engineer') {
                const getEngineer = new Engineer(answers.name, answers.email, answers.id, answers.role)
                console.log(getEngineer.getName())
                 console.log(getEngineer.getEmail())
                team.push(getEngineer);
            }else{console.log('Select new one!')}

            // const getEngineer = new Engineer(answers.name, answers.email, answers.id, answers.role)
            // console.log(getEngineer.getName())
            // console.log(getEngineer.getType())
            // team.push(getEngineer);
            // inquirer.prompt([{
            //         type: 'list',
            //         name: 'choice',
            //         message: "Want to add more?",
            //         choices: ["Manager", "Engineer", "Intern", "Done"]

            //     }])
                // .then(choice => {
                //     if (choice.choice === 'Engineer') {
                //         employeeInfo();
                //     } else if (choice.choice === 'Intern') {
                //         employeeInfo();
                //     } else {
                //         console.log(team);
                //     }
                // })
        })
}

employeeInfo(); 
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.


// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```