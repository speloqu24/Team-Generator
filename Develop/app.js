const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
// const Employee = require("./lib/Employee");

const teamArray = [];

// ---------------------------------------------------
// Create Manager profile
// ---------------------------------------------------

const createManager = () => {
  inquirer
    .prompt([
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
    ])
    .then((response) => {
      // console.log(response);
      const manager = new Manager(
        response.name,
        response.id,
        response.email,
        response.officeNumber
      );
      teamArray.push(manager);
      addAnother();
    });
};

// ---------------------------------------------------
// Confirming another teamMember should be added
// ---------------------------------------------------

const addAnother = () => {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "addAnother",
        message: "Would you like to add another employee?",
      },
    ])
    .then((response) => {
      if (response.addAnother === true) {
        addTeamMember();
      } else {
        const renString = render(teamArray);
        fs.writeFile(outputPath, renString, (err) => {
          if (err) throw err;
          console.log("Your Team has been built!");
        });
      }
    });
};

// ---------------------------------------------------
// Adding Team members
// ---------------------------------------------------

const addTeamMember = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What type of employee would you like to add",
        choices: ["Engineer", "Intern"],
      },
    ])
    .then((response) => {
      if (response.role === "Intern") {
        createIntern();
      } else if (response.role === "Engineer") {
        createEngineer();
      }
    });
};

// ---------------------------------------------------
// Create Intern Profile
// ---------------------------------------------------

const createIntern = () => {
  inquirer
    .prompt([
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
    ])
    .then((response) => {
      // console.log(response);
      const intern = new Intern(
        response.name,
        response.id,
        response.email,
        response.school
      );
      teamArray.push(intern);
      addAnother();
    });
};

// ---------------------------------------------------
// Create Engineer Profile
// ---------------------------------------------------

const createEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Engineer's name? ",
      },
      {
        type: "input",
        name: "id",
        message: "What is the Engineer's ID? ",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Engineer's email? ",
      },
      {
        type: "input",
        name: "github",
        message: "What is the Engineer's github? ",
      },
    ])
    .then((response) => {
      // console.log(response);
      const engineer = new Engineer(
        response.name,
        response.id,
        response.email,
        response.github
      );
      teamArray.push(engineer);
      addAnother();
    });
};

createManager();
