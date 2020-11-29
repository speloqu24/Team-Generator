const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");
// const { getMaxListeners } = require("process");

const teamArray = [];
const managerArray = [];

// ---------------------------------------------------
// Manager Questions / Function
// ---------------------------------------------------

const managerQuestions = () =>
  inquirer.prompt([
    {
      type: "name",
      name: "officeNumber",
      message: "What is your office number?",
    },
    {
      type: "name",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "name",
      name: "id",
      message: "What is your ID",
    },
    {
      type: "confirm",
      name: "addEmployee",
      message: "Would you like to add an Employee?",
    },
  ]);

managerQuestions().then((response) => {
  if (response.addEmployee === true) {
    inquirer.prompt([
      {
        type: "list",
        name: "role",
        message: "What the role of this new employee? ",
        choices: ["Engineer", "Intern", "Manager"],
      },
    ]);

    const manager = new Manager(this.name);
    managerArray.push(manager);

    const engineer = new Engineer("sam", 12345, "me@me.com", "speloqu24");
    teamArray.push(engineer);

    const renString = render(teamArray, managerArray);
    fs.writeFile(outputPath, renString, (err) => {
      if (err) throw err;
      // console.log("success");
    });

    // console.log(renString);
    // console.log(engineer);
  }
});

// ---------------------------------------------------
// New Employee/MemberQuestions
// ---------------------------------------------------

// const newMemberQuestions = () =>
//   inquirer.prompt([
//     {
//       type: "name",
//       name: "name",
//       message: "What is the new employee's name?",
//     },
//     {
//       type: "name",
//       name: "id",
//       message: "Enter employee ID number: ",
//     },
//     {
//       type: "name",
//       name: "email",
//       message: "Enter employee email: ",
//     },
//     {
//       type: "list",
//       name: "role",
//       message: "What the role of this new employee? ",
//       choices: ["Engineer", "Intern"],
//     },
//   ]);

// RENDER & WRITE

// const engineer = new Engineer("sam", 12345, "me@me.com");
// teamArray.push(engineer);

// const teamArray = [];

// const renString = render(teamArray);
// fs.writeFile(outputPath, renString, (err) => {
//   if (err) throw err;
//   console.log("success");
// });

// console.log(renString);
// console.log(engineer);

// then employee type
// Main questions function

// Intern Questions
// Employee Questions - prompts
// Add another Employee - prompts

// Answers
// New (constructor)

// office number/ school / add employee

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

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
