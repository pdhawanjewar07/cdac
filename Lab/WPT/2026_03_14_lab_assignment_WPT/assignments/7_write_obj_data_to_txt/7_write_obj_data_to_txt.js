const fs = require("fs");

let employee_object = {
  emp_id: 12,
  emp_name: "giga chad",
  emp_salary: 99_999,
  emp_deignation: "Project Leader",
}

// clear the employee.txt first
fs.writeFileSync("employee.txt", "");

// then append employee_object data
for (const key in employee_object) {
  // if (!Object.hasOwn(object, key)) continue;
  const value = employee_object[key];
  
  fs.appendFileSync("employee.txt", `${key}: ${value}\n`);
}

console.log("Done writing employee_object data to employee.txt!");
