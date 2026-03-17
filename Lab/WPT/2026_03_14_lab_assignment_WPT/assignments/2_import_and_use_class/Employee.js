export class Employee {
    first_name;
    last_name;
    email;
    designation;
    basic_salary;
    constructor(first_name, last_name, email, designation, basic_salary) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.designation = designation;
        this.basic_salary = basic_salary;
    }
    display() {
        console.log("first_name: " + this.first_name);
        console.log("last_name: " + this.last_name);
        console.log("email: " + this.email);
        console.log("designation: " + this.designation);
        console.log("basic_salary: " + this.basic_salary);
        // end with a seperator
        console.log("---------------------------------------");
    }
    // ... write getter for each
    get_first_name() {
        return this.first_name;
    }
    get_last_name() {
        return this.last_name;
    }
    get_email() {
        return this.email;
    }
    get_designation() {
        return this.designation;
    }
    get_basic_salary() {
        return this.basic_salary;
    }
    // ... write setter for each
    set_first_name(first_name) {
        this.first_name = first_name;
    }
    set_last_name(last_name) {
        this.last_name = last_name;
    }
    set_email(email) {
        this.email = email;
    }
    set_designation(designation) {
        this.designation = designation;
    }
    set_basic_salary(basic_salary) {
        this.basic_salary = basic_salary;
    }
}
