
export class Employee{
  first_name: string;
  last_name: string;
  email: string;
  designation: string;
  basic_salary: number;

  constructor(
    first_name: string,
    last_name: string,
    email: string,
    designation: string,
    basic_salary: number,
  )
  {
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.designation = designation;
    this.basic_salary = basic_salary;
  }

  display(): void{
    console.log("first_name: " + this.first_name);
    console.log("last_name: " + this.last_name);
    console.log("email: " + this.email);
    console.log("designation: " + this.designation);
    console.log("basic_salary: " + this.basic_salary);
    // end with a seperator
    console.log("---------------------------------------");
  }

  // ... write getter for each
  get_first_name(): string{
    return this.first_name;
  }
  get_last_name(): string{
    return this.last_name;
  }
  get_email(): string{
    return this.email;
  }
  get_designation(): string{
    return this.designation;
  }
  get_basic_salary(): number{
    return this.basic_salary;
  }

  // ... write setter for each
  set_first_name(first_name: string): void{
    this.first_name = first_name;
  }
  set_last_name(last_name: string): void{
    this.last_name = last_name;
  }
  set_email(email: string): void{
    this.email = email;
  }
  set_designation(designation: string): void{
    this.designation = designation;
  }
  set_basic_salary(basic_salary: number): void{
    this.basic_salary = basic_salary;
  }

}

