const stud_id_el = document.getElementById("stud_id") as HTMLInputElement;
const stud_name_el = document.getElementById("stud_name") as HTMLInputElement;

const append_btn = document.getElementById("append_btn") as HTMLButtonElement;

// ------------------------------------------------

type Student = {
  id: number;
  name: string;
}

const stud_table_el = document.getElementById("stud_table") as HTMLTableElement;
stud_table_el.style.border = "1px solid black";

let stud_obj_arr: Student[] = [];  // array of Student objs

function updateTable(): void {
  // clear previous data
  stud_table_el.innerHTML = "";

  const headerRow = document.createElement("tr");

  const headers = ["Student ID", "Student Name"];

  headers.forEach(headerText => {
    const th = document.createElement("th");
    th.innerText = headerText;
    th.style.border = "1px solid black";
    headerRow.appendChild(th);
  });

  stud_table_el.appendChild(headerRow);

  stud_obj_arr.forEach(student => {

    const row = document.createElement("tr");

    const td_id = document.createElement("td");
    td_id.innerText = student.id.toString();
    td_id.style.border = "1px solid black";

    const td_name = document.createElement("td");
    td_name.innerText = student.name;
    td_name.style.border = "1px solid black";

    row.appendChild(td_id);
    row.appendChild(td_name);

    stud_table_el.appendChild(row);
  });
}


function appendToTable(): void{
  //
  const stud_obj: Student = {
    id: Number(stud_id_el.value),
    name: stud_name_el.value,
  }

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







