

type Currency = "rupee" | "dollar" | "euro";

function convert_curr(amount: number, curr_from: Currency, curr_to: Currency): string {

    const curr_dict: Record<Currency, number> = {
        rupee: 91.61,
        dollar: 1,
        euro: 0.86
    };

    const converted_amount: number =
        (amount / curr_dict[curr_from]) * curr_dict[curr_to];

    return `${amount}(${curr_from}) to (${curr_to}): ${converted_amount.toFixed(2)}`;
}


const btn: HTMLButtonElement | null = document.getElementById("convert") as HTMLButtonElement;

btn?.addEventListener("click", (): void => {

    const inputAmountEl = document.getElementById("input_amount") as HTMLInputElement;
    const inputAmount: string = inputAmountEl.value;

    if (inputAmount === "") {
        alert("Amount is NULL!");
        return;
    }

    const amount: number = Number(inputAmount);

    // select from currency
    const curr_from: HTMLSelectElement = document.getElementById("from") as HTMLSelectElement;
    const selected_curr_from: Currency = curr_from.value as Currency;

    // select to currency
    const curr_to: HTMLSelectElement = document.getElementById("to") as HTMLSelectElement;
    const selected_curr_to: Currency = curr_to.value as Currency;

    // print output
    const output_p: HTMLElement = document.getElementById("output") as HTMLElement;

    output_p.innerHTML = convert_curr(amount, selected_curr_from, selected_curr_to);
});
