var bDate = document.getElementById("bdate");
var calc_age_btn = document.getElementById("btn_calc_age");
var output_el = document.getElementById("output_age");
// -------------------------------------------------
function display_age() {
    //
    var bdate = new Date(bDate.value);
    var byear = bdate.getFullYear();
    console.log(byear);
    var curr_date = new Date();
    var curr_year = curr_date.getFullYear();
    if (bdate > curr_date) {
        output_el.innerText = "You were not Born in future Bro 😂";
        return;
    }
    var user_age = curr_year - byear;
    if (user_age > 100) {
        output_el.innerText = user_age + "(years), How are you still alive? 😲";
        return;
    }
    output_el.innerText = user_age + "(years) ✌";
}
calc_age_btn.addEventListener("click", display_age);
