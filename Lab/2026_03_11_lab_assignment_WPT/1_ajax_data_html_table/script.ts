type Product = {
  id: number;
  title: string;
  price: number;
};

const fetch_btn = document.getElementById("fetch_data") as HTMLButtonElement;
const output_div = document.getElementById("ajax_data") as HTMLDivElement;

function loadData() {
  let xhttp: XMLHttpRequest = new XMLHttpRequest();
  const url: string = "https://fakestoreapi.com/products";

  xhttp.open("GET", url);
  xhttp.send();

  xhttp.onreadystatechange = function () {
    
    if (this.readyState === 4 && this.status === 200) {
  
      let data: Product[] = JSON.parse(this.responseText);
      // console.log(data);
      // output_div.innerText = JSON.stringify(d, null, 2);

      // create table
      const table: HTMLTableElement = document.createElement("table");
      table.style.border = "1px solid black";

      // create header row
      const headerRow: HTMLTableRowElement = document.createElement("tr");

      const headers: string[] = ["ID", "Title", "Price"];

      headers.forEach(headerText => {
        const th: HTMLTableCellElement = document.createElement("th");
        th.innerText = headerText;
        th.style.border = "1px solid black";
        headerRow.appendChild(th);
      });

      table.appendChild(headerRow);


      data.forEach((item: Product) => {

        const row: HTMLTableRowElement = document.createElement("tr");

        const td1 = document.createElement("td");
        td1.innerText = item.id.toString();
        td1.style.border = "1px solid black";

        const td2 = document.createElement("td");
        td2.innerText = item.title;
        td2.style.border = "1px solid black";

        const td3 = document.createElement("td");
        td3.innerText = item.price.toString();
        td3.style.border = "1px solid black";

        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);

        table.appendChild(row);
      });

      // append table to div
      output_div.appendChild(table);
    }

  };
}

fetch_btn.addEventListener("click", loadData);

