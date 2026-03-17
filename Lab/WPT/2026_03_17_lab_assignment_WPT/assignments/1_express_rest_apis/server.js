import express from "express";
import { ProductManager } from "./ProductManager.js";
const productManager = new ProductManager();
const app = express();
// app.use(express.json()); // express middleware for json
// Display all products
app.get("/", (req, res) => {
    res.send(productManager.get_products());
});
/* Display product by it's id (clean + REST style)
>> http://localhost:5050/product/2  */
app.get("/product/:id", (req, res) => {
    res.send(productManager.get_product(Number(req.params.id)));
});
/* Add product with params via POST (Query params)
>> http://localhost:5050/add?id=3&name=product_3&price=30 */
app.post("/add_via_query", (req, res) => {
    const id = Number(req.query.id);
    const name = String(req.query.name);
    const price = Number(req.query.price);
    productManager.add_product(id, name, price);
    res.send({ id, name, price });
});
/* Add product with params via POST (Body JSON) <<RIGHT-WAY>>
>> http://localhost:5050/add
body = {"id": 4, "name": "product_4", "price": 40}  */
app.post("/add_via_body", (req, res) => {
    const { id, name, price } = req.body;
    productManager.add_product(id, name, price);
    res.send({ id, name, price });
});
/* Delete a product by it's id (clean + REST style)
>> http://localhost:5050/product/4  */
app.delete("/product/:id", (req, res) => {
    const p_id = Number(req.params.id);
    productManager.delete_product(p_id);
    res.send({ id: p_id });
});
app.listen(5050, () => {
    console.log("Server running on port 5050");
});
