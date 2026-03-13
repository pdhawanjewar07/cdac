function fetch1(callback) {
    // javascript 
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error("Error:", error));
}
function handle(data) {
    console.log("Fetched Data:", data);
}
fetch1(handle);