var student = {
    "StudentId": 1,
    "StudentName": "s-name",
    "Grade": "A",
};
var student_obj_string = JSON.stringify(student);
console.log(student_obj_string);
console.log("----------------------------------------------------");
var student_obj = JSON.parse(student_obj_string);
console.log(student_obj);
export {};
