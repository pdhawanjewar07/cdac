// export {};
const first_name_el = document.getElementById("first_name_el");
const last_name_el = document.getElementById("last_name_el");
const birth_date_el = document.getElementById("birth_date_el");
const output_username_p_el = document.getElementById("output_username_p_el");
const gen_username_btn = document.getElementById("gen_username_btn");
const copy_to_clipboard_btn = document.getElementById("copy_to_clipboard_btn");
// ----------------------------------------------------------
function get_age(user_birth_year) {
    const curr_year = new Date().getFullYear();
    return (curr_year - user_birth_year);
}
function gen_username() {
    //
    let username = "";
    // first 2 characters from first name
    let first_name = first_name_el.value;
    username += first_name.slice(0, 2);
    // age
    const [year, month, day] = birth_date_el.value.split("-").map(Number);
    let user_age = get_age(year);
    username += user_age.toString();
    // first 2 characters from last name
    let last_name = last_name_el.value;
    username += last_name.slice(0, 2);
    return username;
}
// ----------------------------------------------------------
copy_to_clipboard_btn.addEventListener("click", () => {
    navigator.clipboard.writeText(output_username_p_el.innerText);
});
gen_username_btn.addEventListener("click", function () {
    //
    output_username_p_el.innerText = gen_username();
});
export {};
