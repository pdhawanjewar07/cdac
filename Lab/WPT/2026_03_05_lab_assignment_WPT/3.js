var array = ["a", "b", "c", "d"];
var output_arr_div = document.getElementById("output_arr");
// --------------------------------------------------------------
function update_array_display() {
    output_arr_div.innerHTML = array.join(", ");
    // console.log(array);
}
;
update_array_display();
// --------------------------------------------------------------
var check_found_btn = document.getElementById("check_found");
var input_text_el = document.getElementById("input_text");
var input_text;
check_found_btn === null || check_found_btn === void 0 ? void 0 : check_found_btn.addEventListener("click", function () {
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
var add_to_array_btn = document.getElementById("add_to_array");
add_to_array_btn === null || add_to_array_btn === void 0 ? void 0 : add_to_array_btn.addEventListener("click", function () {
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
var add_to_array_at_index_btn = document.getElementById("add_to_array_at_index");
var add_at_index_el = document.getElementById("add_at_index");
var add_at_index;
add_to_array_at_index_btn === null || add_to_array_at_index_btn === void 0 ? void 0 : add_to_array_at_index_btn.addEventListener("click", function () {
    //
    input_text = input_text_el.value;
    add_at_index = Number(add_at_index_el.value);
    if (array.includes(input_text)) {
        alert("Already present in array: ".concat(array.indexOf(input_text), "(index)"));
        return;
    }
    //
    array.splice(add_at_index, 0, input_text);
    update_array_display();
});
// --------------------------------------------------------------
var remove_from_array_at_index_btn = document.getElementById("remove_from_array_at_index");
var remove_at_index_el = document.getElementById("remove_at_index");
var remove_at_index;
remove_from_array_at_index_btn === null || remove_from_array_at_index_btn === void 0 ? void 0 : remove_from_array_at_index_btn.addEventListener("click", function () {
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
