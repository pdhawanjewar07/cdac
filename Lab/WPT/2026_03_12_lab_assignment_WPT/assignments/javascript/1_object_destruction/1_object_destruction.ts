type Obj = {
  id: number;
  name: string;
  salary: number;
}


const obj: Obj = {
  id: 47,
  name: "Prathamesh Dhawanjewar",
  salary: 99999,
}

// Destroying the object

const {id: o_id, name: o_name, salary: o_salary} = obj;

console.log(o_id);
console.log(o_name);
console.log(o_salary);
