var array = ["a", "b", "c", "d"];
const output_arr_div = document.getElementById("output_arr");
// --------------------------------------------------------------
function update_array_display() {
    output_arr_div.innerHTML = array.join(", ");
    // console.log(array);
}
;
update_array_display();
// --------------------------------------------------------------
const check_found_btn = document.getElementById("check_found");
var input_text_el = document.getElementById("input_text");
var input_text;
check_found_btn?.addEventListener("click", () => {
    //
    input_text = input_text_el.value;
    if (array.includes(input_text)) {
        alert("Found");
    }
    else {
        alert("Not Found");
    }
});
// --------------------------------------------------------------
const add_to_array_btn = document.getElementById("add_to_array");
add_to_array_btn?.addEventListener("click", () => {
    //
    input_text = input_text_el.value;
    if (array.includes(input_text)) {
        alert("Already present in array");
        return;
    }
    //
    array.push(input_text);
    console.log("Added to array: " + input_text);
    update_array_display();
});
// --------------------------------------------------------------
const add_to_array_at_index_btn = document.getElementById("add_to_array_at_index");
const add_at_index_el = document.getElementById("add_at_index");
var add_at_index;
add_to_array_at_index_btn?.addEventListener("click", () => {
    //
    input_text = input_text_el.value;
    add_at_index = Number(add_at_index_el.value);
    if (array.includes(input_text)) {
        alert(`Already present in array: ${array.indexOf(input_text)}(index)`);
        return;
    }
    //
    array.splice(add_at_index, 0, input_text);
    update_array_display();
});
// --------------------------------------------------------------
const remove_from_array_at_index_btn = document.getElementById("remove_from_array_at_index");
const remove_at_index_el = document.getElementById("remove_at_index");
var remove_at_index;
remove_from_array_at_index_btn?.addEventListener("click", () => {
    //
    remove_at_index = Number(remove_at_index_el.value);
    if ((remove_at_index >= array.length)) {
        alert("Index out of range!");
        return;
    }
    //
    array.splice(remove_at_index, 1);
    update_array_display();
});
export {};
