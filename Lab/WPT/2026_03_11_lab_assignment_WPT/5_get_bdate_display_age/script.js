const bDate = document.getElementById("bdate");
const calc_age_btn = document.getElementById("btn_calc_age");
const output_el = document.getElementById("output_age");
// -------------------------------------------------
function display_age() {
    //
    const bdate = new Date(bDate.value);
    const byear = bdate.getFullYear();
    // console.log(byear);
    const curr_date = new Date();
    const curr_year = curr_date.getFullYear();
    if (bdate > curr_date) {
        output_el.innerText = "You were not Born in future Bro 😂";
        return;
    }
    const user_age = curr_year - byear;
    if (user_age > 100) {
        output_el.innerText = user_age + "(years), How are you still alive? 😲";
        return;
    }
    output_el.innerText = user_age + "(years) ✌";
}
calc_age_btn.addEventListener("click", display_age);
export {};
