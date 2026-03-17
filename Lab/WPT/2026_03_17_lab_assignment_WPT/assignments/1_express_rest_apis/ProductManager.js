import fs from "fs";
export class ProductManager {
    filePath = "./products.json";
    //
    get_products() {
        // 1. Read file
        const data = fs.readFileSync(this.filePath, "utf-8");
        // 2. Parse JSON
        const products = JSON.parse(data);
        return products;
    }
    //
    add_product(p_id, p_name, p_price) {
        //
        const newProduct = {
            id: p_id,
            name: p_name,
            price: p_price
        };
        const products = this.get_products();
        products.push(newProduct);
        // Write back
        fs.writeFileSync(this.filePath, JSON.stringify(products, null, 1));
    }
    //
    delete_product(p_id) {
        //
        const products = this.get_products();
        const updated = products.filter(obj => obj.id !== p_id);
        // Write back
        fs.writeFileSync(this.filePath, JSON.stringify(updated, null, 1));
    }
    //
    get_product(p_id) {
        //
        const products = this.get_products();
        // [0]: first occurence
        return products.filter(obj => obj.id === p_id)[0];
    }
}
