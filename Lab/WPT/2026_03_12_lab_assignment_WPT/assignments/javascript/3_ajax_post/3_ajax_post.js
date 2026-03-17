const title_field = document.getElementById("user_title");
const id_field = document.getElementById("user_id");
const body_field = document.getElementById("user_body");
const output_p_el = document.getElementById("output");
const send_records_btn = document.getElementById("send_records_btn");
const post_url = "https://jsonplaceholder.typicode.com/todos";
function clear_fields() {
    title_field.value = "";
    id_field.value = "";
    body_field.value = "";
}
function send_records() {
    // create user object
    const user_obj = {
        title: title_field.value,
        id: Number(id_field.value),
        body: body_field.value,
    };
    // print user obj to console
    console.log(user_obj);
    // start post request
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", post_url, true); // async = true
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(user_obj));
    xhttp.onreadystatechange = function () {
        // 4 - readyState (Request finished)
        if (this.readyState === 4) {
            //  201 - for POST (Resource created successfully)
            if (this.status === 201) {
                output_p_el.innerText = this.responseText;
                console.log("Data was posted & printed in output field!");
            }
            else {
                console.log("Error(Status): " + this.status);
            }
        }
    };
    // clear all fields after posting
    clear_fields();
}
send_records_btn.addEventListener("click", send_records);
export {};
