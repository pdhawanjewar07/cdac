// get show_operation paragraph element
var show_operation_p_el = document.getElementById("show_operation");
// get show_input_output paragraph element
var show_input_output_p_el = document.getElementById("show_input_output");
// get evaluate btn
var evaluate_btn = document.getElementById("evaluate");
// get delete and clear buttons and add event listeners
var delete_btn = document.getElementById("delete");
var clear_btn = document.getElementById("clear");
delete_btn.addEventListener("click", function () {
    show_input_output_p_el.innerText = show_input_output_p_el.innerText.slice(0, -1);
});
clear_btn.addEventListener("click", function () {
    show_input_output_p_el.innerText = "";
});
//
var digit_buttons = document.querySelectorAll(".digit");
var operator_buttons = document.querySelectorAll(".operator");
digit_buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        show_input_output_p_el.innerText += btn.innerText;
    });
});
operator_buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        operation = btn.innerText;
        show_input_output_p_el.innerText += operation;
    });
});
var operations = {
    "+": function (a, b) { return a + b; },
    "-": function (a, b) { return a - b; },
    "x": function (a, b) { return a * b; },
    "÷": function (a, b) { return a / b; },
    "%": function (a, b) { return a % b; }
};
var operation = "";
evaluate_btn.addEventListener("click", function () {
    var parts = show_input_output_p_el.innerText.split(operation);
    var first_num = Number(parts[0]);
    var second_num = Number(parts[1]);
    var result = operations[operation](first_num, second_num);
    show_operation_p_el.innerText = show_input_output_p_el.innerText;
    show_input_output_p_el.innerText = result.toString();
});
