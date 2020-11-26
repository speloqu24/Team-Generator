// TODO: Write code to define and export the Employee class

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

//  if engineer is selected append to engineer.html
// if intern is selected append to intern.html
// if manager is selected append to manager.html

// fs.writeFile("htmlRenderer.js", htmlInfo, (err) =>
//   err ? console.error(err) : console.log("reading employee file")
// );

module.exports = Employee;
