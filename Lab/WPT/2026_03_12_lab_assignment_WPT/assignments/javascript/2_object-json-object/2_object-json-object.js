var obj1 = {
    id: 47,
    name: "Prathamesh Dhawanjewar",
    salary: 99999,
};
// to json data
var json_data = JSON.stringify(obj1);
console.log(json_data);
// back to json objecct
var obj_again = JSON.parse(json_data);
console.log(obj_again);
console.log(obj_again.id);
console.log(obj_again.name);
console.log(obj_again.salary);
