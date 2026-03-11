var fetch_btn = document.getElementById("fetch_data");
var output_div = document.getElementById("ajax_data");
function loadData() {
    var xhttp = new XMLHttpRequest();
    var url = "https://fakestoreapi.com/products";
    xhttp.open("GET", url);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var data = JSON.parse(this.responseText);
            // console.log(data);
            // output_div.innerText = JSON.stringify(d, null, 2);
            // create table
            var table_1 = document.createElement("table");
            table_1.style.border = "1px solid black";
            // create header row
            var headerRow_1 = document.createElement("tr");
            var headers = ["ID", "Title", "Price"];
            headers.forEach(function (headerText) {
                var th = document.createElement("th");
                th.innerText = headerText;
                th.style.border = "1px solid black";
                headerRow_1.appendChild(th);
            });
            table_1.appendChild(headerRow_1);
            data.forEach(function (item) {
                var row = document.createElement("tr");
                var td1 = document.createElement("td");
                td1.innerText = item.id.toString();
                td1.style.border = "1px solid black";
                var td2 = document.createElement("td");
                td2.innerText = item.title;
                td2.style.border = "1px solid black";
                var td3 = document.createElement("td");
                td3.innerText = item.price.toString();
                td3.style.border = "1px solid black";
                row.appendChild(td1);
                row.appendChild(td2);
                row.appendChild(td3);
                table_1.appendChild(row);
            });
            // append table to div
            output_div.appendChild(table_1);
        }
    };
}
fetch_btn.addEventListener("click", loadData);
