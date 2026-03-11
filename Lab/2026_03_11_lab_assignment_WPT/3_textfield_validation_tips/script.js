var input_textfield = document.getElementById("input_text");
var hint_el = document.getElementById("hint");
function validate() {
    //
    var input_text = input_textfield.value;
    if (input_text === "") {
        hint_el.innerText = "texfield empty (Required) 👊";
        return;
    }
    if (input_text.length < 5 || input_text.length > 10) {
        hint_el.innerText = "text length should be between 5-10 characters(inclusive) 😒";
        return;
    }
    hint_el.innerText = "looks good ✌";
}
input_textfield.addEventListener("input", validate);
validate();
