
const input_textfield: HTMLInputElement = document.getElementById("input_text") as HTMLInputElement;

const hint_el: HTMLParagraphElement = document.getElementById("hint") as HTMLParagraphElement;


function validate(): void{
  //
  const input_text: string = input_textfield.value;

  if (input_text === ""){
    hint_el.innerText = "texfield empty (Required) 👊";
    return;
  }

  if (input_text.length < 5 || input_text.length > 10){
    hint_el.innerText = "text length should be between 5-10 characters(inclusive) 😒"
    return;
  }

  hint_el.innerText = "looks good ✌";

}


input_textfield.addEventListener("input", validate);

validate();







