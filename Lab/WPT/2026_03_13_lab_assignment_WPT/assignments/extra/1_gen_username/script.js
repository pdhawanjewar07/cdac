// export {};
var first_name_el = document.getElementById("first_name_el");
var last_name_el = document.getElementById("last_name_el");
var birth_date_el = document.getElementById("birth_date_el");
var output_username_p_el = document.getElementById("output_username_p_el");
var gen_username_btn = document.getElementById("gen_username_btn");
var copy_to_clipboard_btn = document.getElementById("copy_to_clipboard_btn");
// ----------------------------------------------------------
function get_age(user_birth_year) {
    var curr_year = new Date().getFullYear();
    return (curr_year - user_birth_year);
}
function gen_username() {
    //
    var username = "";
    // first 2 characters from first name
    var first_name = first_name_el.value;
    username += first_name.slice(0, 2);
    // age
    var _a = birth_date_el.value.split("-").map(Number), year = _a[0], month = _a[1], day = _a[2];
    var user_age = get_age(year);
    username += user_age.toString();
    // first 2 characters from last name
    var last_name = last_name_el.value;
    username += last_name.slice(0, 2);
    return username;
}
// ----------------------------------------------------------
copy_to_clipboard_btn.addEventListener("click", function () {
    navigator.clipboard.writeText(output_username_p_el.innerText);
});
gen_username_btn.addEventListener("click", function () {
    //
    output_username_p_el.innerText = gen_username();
});
