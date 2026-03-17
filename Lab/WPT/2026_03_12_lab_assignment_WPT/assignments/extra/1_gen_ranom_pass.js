let arr_symbols_ascii = [];
let arr_small_alphabets_ascii = [];
let arr_upper_alphabets_ascii = [];
let arr_0to9_ascii = [];
function add_to_arr(arr, start, end) {
    // inclusive ends
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
}
function initialize_ascii_arrays() {
    // symbols(ascii ranges) => 33.47, 58.64, 91.96, 123.126
    add_to_arr(arr_symbols_ascii, 33, 47);
    add_to_arr(arr_symbols_ascii, 58, 64);
    add_to_arr(arr_symbols_ascii, 91, 96);
    add_to_arr(arr_symbols_ascii, 123, 126);
    // small alphabets(ascii ranges) => 97.122
    add_to_arr(arr_small_alphabets_ascii, 97, 122);
    // upper alphabets(ascii ranges) => 65.90
    add_to_arr(arr_upper_alphabets_ascii, 65, 90);
    // 0 to 9 integers(ascii ranges) => 48.57
    add_to_arr(arr_0to9_ascii, 48, 57);
}
function get_random_arr_from_arr(arr) {
    //  floor(0-1) * arr.length
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}
function get_random_num_from_arr(arr) {
    //  floor(0-1) * arr.length
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}
// Global initialization on start
// populate ascii values to their arrays
initialize_ascii_arrays();
// make array of arrays
const big_arr = [arr_symbols_ascii, arr_small_alphabets_ascii, arr_upper_alphabets_ascii, arr_0to9_ascii];
const input_pass_length_el = document.getElementById("input_pass_length");
const output_pass_p_el = document.getElementById("output_pass_p_el");
const gen_ranom_pass_btn = document.getElementById("gen_ranom_pass_btn");
const copy_to_clipboard_btn = document.getElementById("copy_to_clipboard_btn");
let input_pass_length;
function get_random_password() {
    //
    let random_password = "";
    input_pass_length = Number(input_pass_length_el.value);
    // type(input_pass_length) == integer
    if (input_pass_length % 1 !== 0) {
        // not an integer
        alert("Password length must be an integer 👊");
        return;
    }
    // 1 <= input_pass_length <= 20
    if (input_pass_length < 1 || input_pass_length > 20) {
        alert("Password length must be between 1-20 👊");
        return;
    }
    for (let i = 1; i <= input_pass_length; i++) {
        //
        let ranom_arr = get_random_arr_from_arr(big_arr);
        let random_ascii = get_random_num_from_arr(ranom_arr);
        random_password += String.fromCharCode(random_ascii);
    }
    // insert pass here
    output_pass_p_el.innerText = random_password;
}
gen_ranom_pass_btn.addEventListener("click", get_random_password);
copy_to_clipboard_btn.addEventListener("click", () => {
    //
    navigator.clipboard.writeText(output_pass_p_el.innerText);
});
export {};
