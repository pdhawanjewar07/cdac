function convert_curr(amount, curr_from, curr_to) {
    const curr_dict = {
        rupee: 91.61,
        dollar: 1,
        euro: 0.86
    };
    const converted_amount = (amount / curr_dict[curr_from]) * curr_dict[curr_to];
    return `${amount}(${curr_from}) to (${curr_to}): ${converted_amount.toFixed(2)}`;
}
const btn = document.getElementById("convert");
btn?.addEventListener("click", () => {
    const inputAmountEl = document.getElementById("input_amount");
    const inputAmount = inputAmountEl.value;
    if (inputAmount === "") {
        alert("Amount is NULL!");
        return;
    }
    const amount = Number(inputAmount);
    // select from currency
    const curr_from = document.getElementById("from");
    const selected_curr_from = curr_from.value;
    // select to currency
    const curr_to = document.getElementById("to");
    const selected_curr_to = curr_to.value;
    // print output
    const output_p = document.getElementById("output");
    output_p.innerHTML = convert_curr(amount, selected_curr_from, selected_curr_to);
});
export {};
