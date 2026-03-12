

var student: Object = {
  "StudentId": 1,
  "StudentName": "s-name",
  "Grade": "A",
}

var student_obj_string: string = JSON.stringify(student);
console.log(student_obj_string);

console.log("----------------------------------------------------");

var student_obj: Object = JSON.parse(student_obj_string);
console.log(student_obj);

