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

// const teamArray = [];
// const managerArray = [];

// ---------------------------------------------------
// Initial Manager Questions, creating the Manager
// ---------------------------------------------------

const createManager = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "officeNumber",
      message: "What is your managers office number? ",
    },
    {
      type: "input",
      name: "name",
      message: "What is your managers name? ",
    },
    {
      type: "input",
      name: "id",
      message: "What is your managers ID? ",
    },
    {
      type: "input",
      name: "email",
      message: "What is your managers email? ",
    },
  ]);

createManager().then(() => {
  addTeamMember();
});

// ---------------------------------------------------
// Adding Team members
// ---------------------------------------------------

const addTeamMember = () => {
  inquirer.prompt([
    {
      type: "list",
      name: "role",
      message: "What type of employee would you like to add",
      choices: ["Engineer", "Intern", "None"],
    },
  ]);
};

addTeamMember().then(() => {
  if (response.role === "Intern") {
    createIntern();
  }
});

// create manager, intern, engineer functions
// call re-ask function at the end
// if they select none> Render

// ---------------------------------------------------
// Adding Intern
// ---------------------------------------------------

const createIntern = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the interns name? ",
    },
    {
      type: "input",
      name: "id",
      message: "What is the interns ID? ",
    },
    {
      type: "input",
      name: "email",
      message: "What is the interns email? ",
    },
    {
      type: "input",
      name: "school",
      message: "What school did the intern go to? ",
    },
  ]);
};

// Render/Restring function

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
