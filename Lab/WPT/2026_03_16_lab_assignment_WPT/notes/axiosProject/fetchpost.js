const updatedData = { id: 1, price: 300 };

fetch('https://fakestoreapi.com/products/1', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedData)
}).then(response => response.json())
    .then(result => console.log(result));


//get 
fetch('https://fakestoreapi.com/products/1')
    .then(response => response.json())
    .then(result => console.log(result))
    .catch((error) => console.log(error));