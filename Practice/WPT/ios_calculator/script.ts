
// get show_operation paragraph element
const show_operation_p_el: HTMLParagraphElement = document.getElementById("show_operation") as HTMLParagraphElement;

// get show_input_output paragraph element
const show_input_output_p_el: HTMLParagraphElement = document.getElementById("show_input_output") as HTMLParagraphElement;

// get evaluate btn
const evaluate_btn: HTMLButtonElement = document.getElementById("evaluate") as HTMLButtonElement;

// get delete and clear buttons and add event listeners
const delete_btn: HTMLButtonElement = document.getElementById("delete") as HTMLButtonElement;
const clear_btn: HTMLButtonElement = document.getElementById("clear") as HTMLButtonElement;

delete_btn.addEventListener("click", ()=>{
  show_input_output_p_el.innerText = show_input_output_p_el.innerText.slice(0, -1);
})

clear_btn.addEventListener("click", ()=>{
  show_input_output_p_el.innerText = "";
})

//
const digit_buttons = document.querySelectorAll<HTMLButtonElement>(".digit");
const operator_buttons = document.querySelectorAll<HTMLButtonElement>(".operator");

digit_buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    show_input_output_p_el.innerText += btn.innerText;
  });
});

operator_buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    operation = btn.innerText;
    show_input_output_p_el.innerText += operation;
  });
});

const operations: Record<string,(a:number,b:number)=>number> = {
  "+": (a,b)=>a+b,
  "-": (a,b)=>a-b,
  "x": (a,b)=>a*b,
  "÷": (a,b)=>a/b,
  "%": (a,b)=>a%b
};

let operation = "";

function get_result(): void{
  const parts = show_input_output_p_el.innerText.split(operation);
  const first_num = Number(parts[0]);
  const second_num = Number(parts[1]);

  const result = operations[operation](first_num, second_num);

  show_operation_p_el.innerText = show_input_output_p_el.innerText;
  show_input_output_p_el.innerText = result.toString();
}

evaluate_btn.addEventListener("click", get_result);

