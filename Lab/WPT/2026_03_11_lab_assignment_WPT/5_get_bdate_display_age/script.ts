
const bDate: HTMLInputElement = document.getElementById("bdate") as HTMLInputElement;

const calc_age_btn: HTMLButtonElement = document.getElementById("btn_calc_age") as HTMLButtonElement;

const output_el: HTMLParagraphElement = document.getElementById("output_age") as HTMLParagraphElement;
// -------------------------------------------------

function display_age(): void{
  //
  const bdate: Date = new Date(bDate.value);
  const byear: number = bdate.getFullYear();
  // console.log(byear);

  const curr_date: Date = new Date();
  const curr_year: number = curr_date.getFullYear();

  if (bdate > curr_date){
    output_el.innerText = "You were not Born in future Bro 😂";
    return;
  }

  const user_age: number = curr_year - byear;

  if (user_age > 100){
    output_el.innerText = user_age + "(years), How are you still alive? 😲";
    return;
  }

  output_el.innerText = user_age + "(years) ✌";
}


calc_age_btn.addEventListener("click", display_age);



