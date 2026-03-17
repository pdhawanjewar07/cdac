const obj1 = {
    id: 47,
    name: "Prathamesh Dhawanjewar",
    salary: 999_999,
};
// to json data
const json_data = JSON.stringify(obj1);
console.log(json_data);
// back to json objecct
const obj_again = JSON.parse(json_data);
console.log(obj_again);
console.log(obj_again.id);
console.log(obj_again.name);
console.log(obj_again.salary);
export {};
