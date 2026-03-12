var stud_id_el = document.getElementById("stud_id");
var stud_name_el = document.getElementById("stud_name");
var append_btn = document.getElementById("append_btn");
var stud_table_el = document.getElementById("stud_table");
stud_table_el.style.border = "1px solid black";
var stud_obj_arr = []; // array of Student objs
function updateTable() {
    stud_table_el.innerHTML = "";
    var headerRow = document.createElement("tr");
    var headers = ["Student ID", "Student Name"];
    headers.forEach(function (headerText) {
        var th = document.createElement("th");
        th.innerText = headerText;
        th.style.border = "1px solid black";
        headerRow.appendChild(th);
    });
    stud_table_el.appendChild(headerRow);
    stud_obj_arr.forEach(function (student) {
        var row = document.createElement("tr");
        var td_id = document.createElement("td");
        td_id.innerText = student.id.toString();
        td_id.style.border = "1px solid black";
        var td_name = document.createElement("td");
        td_name.innerText = student.name;
        td_name.style.border = "1px solid black";
        row.appendChild(td_id);
        row.appendChild(td_name);
        stud_table_el.appendChild(row);
    });
}
function appendToTable() {
    //
    var stud_obj = {
        id: Number(stud_id_el.value),
        name: stud_name_el.value,
    };
    stud_obj_arr.push(stud_obj);
    // clear fields after adding to table
    stud_id_el.value = "";
    stud_name_el.value = "";
    //  display array in console
    console.log(stud_obj_arr);
    // update table
    updateTable();
}
append_btn.addEventListener("click", appendToTable);
