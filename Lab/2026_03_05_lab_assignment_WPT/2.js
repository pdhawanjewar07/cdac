function convert_curr(amount, curr_from, curr_to) {
    var curr_dict = {
        rupee: 91.61,
        dollar: 1,
        euro: 0.86
    };
    var converted_amount = (amount / curr_dict[curr_from]) * curr_dict[curr_to];
    return "".concat(amount, "(").concat(curr_from, ") to (").concat(curr_to, "): ").concat(converted_amount.toFixed(2));
}
var btn = document.getElementById("convert");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
    var inputAmountEl = document.getElementById("input_amount");
    var inputAmount = inputAmountEl.value;
    if (inputAmount === "") {
        alert("Amount is NULL!");
        return;
    }
    var amount = Number(inputAmount);
    // select from currency
    var curr_from = document.getElementById("from");
    var selected_curr_from = curr_from.value;
    // select to currency
    var curr_to = document.getElementById("to");
    var selected_curr_to = curr_to.value;
    // print output
    var output_p = document.getElementById("output");
    output_p.innerHTML = convert_curr(amount, selected_curr_from, selected_curr_to);
});
