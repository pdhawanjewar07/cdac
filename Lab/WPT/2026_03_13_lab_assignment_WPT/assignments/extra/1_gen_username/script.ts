// export {};

const first_name_el: HTMLInputElement = document.getElementById("first_name_el") as HTMLInputElement;
const last_name_el: HTMLInputElement = document.getElementById("last_name_el") as HTMLInputElement;
const birth_date_el: HTMLInputElement = document.getElementById("birth_date_el") as HTMLInputElement;

const output_username_p_el: HTMLParagraphElement = document.getElementById("output_username_p_el") as HTMLParagraphElement;

const gen_username_btn: HTMLButtonElement = document.getElementById("gen_username_btn") as HTMLButtonElement;
const copy_to_clipboard_btn: HTMLButtonElement = document.getElementById("copy_to_clipboard_btn") as HTMLButtonElement;

// ----------------------------------------------------------
function get_age(user_birth_year: number): number{
  const curr_year: number = new Date().getFullYear();

  return (curr_year - user_birth_year);
}

function gen_username(): string{
  //
  let username = "";

  // first 2 characters from first name
  let first_name: string = first_name_el.value;
  username += first_name.slice(0, 2);
  
  // age
  const [year, month, day] = birth_date_el.value.split("-").map(Number);
  let user_age: number = get_age(year);
  username += user_age.toString();

  // first 2 characters from last name
  let last_name: string = last_name_el.value;
  username += last_name.slice(0, 2);

  return username;
}

// ----------------------------------------------------------
copy_to_clipboard_btn.addEventListener("click",()=>{
  navigator.clipboard.writeText(output_username_p_el.innerText);
})

gen_username_btn.addEventListener("click", function(){
  //
  output_username_p_el.innerText = gen_username();
})






















