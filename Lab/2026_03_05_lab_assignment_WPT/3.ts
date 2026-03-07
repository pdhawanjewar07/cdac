
var array:string[] = ["a", "b", "c", "d"];

const output_arr_div: HTMLDivElement = document.getElementById("output_arr") as HTMLDivElement;
// --------------------------------------------------------------

function update_array_display(): void{
  output_arr_div.innerHTML = array.join(", ");
  // console.log(array);
};
update_array_display();
// --------------------------------------------------------------
const check_found_btn: HTMLButtonElement = document.getElementById("check_found") as HTMLButtonElement;
var input_text_el: HTMLInputElement = document.getElementById("input_text") as HTMLInputElement;

var input_text: string;

check_found_btn?.addEventListener("click", (): void =>{
  //
  input_text = input_text_el.value;

  if (array.includes(input_text)){
    alert("Found");
  }
  else{
    alert("Not Found");
  }
});
// --------------------------------------------------------------

const add_to_array_btn: HTMLButtonElement = document.getElementById("add_to_array") as HTMLButtonElement;

add_to_array_btn?.addEventListener("click", (): void =>{
  //
  input_text = input_text_el.value;

  if (array.includes(input_text)){
    alert("Already present in array");
    return;
  }
  //
  array.push(input_text);
  console.log("Added to array: " + input_text);
  update_array_display();
});
// --------------------------------------------------------------

const add_to_array_at_index_btn: HTMLButtonElement = document.getElementById("add_to_array_at_index") as HTMLButtonElement;
const add_at_index_el: HTMLInputElement = document.getElementById("add_at_index") as HTMLInputElement;
var add_at_index: number;

add_to_array_at_index_btn?.addEventListener("click", (): void => {
  //
  input_text = input_text_el.value;
  add_at_index = Number(add_at_index_el.value);

  if (array.includes(input_text)){
    alert(`Already present in array: ${array.indexOf(input_text)}(index)`);
    return;
  }
  //
  array.splice(add_at_index, 0, input_text);
  update_array_display();
});
// --------------------------------------------------------------

const remove_from_array_at_index_btn: HTMLButtonElement = document.getElementById("remove_from_array_at_index") as HTMLButtonElement;
const remove_at_index_el: HTMLInputElement = document.getElementById("remove_at_index") as HTMLInputElement;
var remove_at_index: number;

remove_from_array_at_index_btn?.addEventListener("click", (): void => {
  //
  remove_at_index = Number(remove_at_index_el.value);

  if ((remove_at_index >= array.length)){
    alert("Index out of range!");
    return;
  }
  //
  array.splice(remove_at_index, 1);
  update_array_display();
});

