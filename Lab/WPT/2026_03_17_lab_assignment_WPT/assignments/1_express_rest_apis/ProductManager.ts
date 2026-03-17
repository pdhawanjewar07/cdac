import fs from "fs";


// >> Types
type Product = {
  id: number;
  name: string;
  price: number;
}


export class ProductManager{
  filePath: string = "./products.json";
  //
  get_products(): Product[]{
    // 1. Read file
    const data: string = fs.readFileSync(this.filePath, "utf-8");
    // 2. Parse JSON
    const products: Product[] = JSON.parse(data);

    return products;
  }
  //
  add_product(
    p_id: number, 
    p_name: string, 
    p_price: number
  ): void{
    //
    const newProduct: Product = {
      id: p_id,
      name: p_name,
      price: p_price
    };

    const products: Product[] = this.get_products();
    products.push(newProduct);

    // Write back
    fs.writeFileSync(this.filePath, JSON.stringify(products, null, 1));
  }
  //
  delete_product(
    p_id: number
  ): void{
    //
    const products: Product[] = this.get_products();

    const updated = products.filter(obj => obj.id !== p_id);
  
    // Write back
    fs.writeFileSync(this.filePath, JSON.stringify(updated, null, 1));
  }
  //
  get_product(p_id: number): Product | undefined{
    //
    const products: Product[] = this.get_products();
    // [0]: first occurence
    return products.filter(obj => obj.id === p_id)[0];
  }
}


