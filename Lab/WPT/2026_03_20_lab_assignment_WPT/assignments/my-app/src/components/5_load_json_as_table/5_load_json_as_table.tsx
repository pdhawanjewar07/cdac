import json_data from "./shopstock.json";
import "./LoadJsonAsTableComponent.css";

// TYPES
type ShopStockJsonData = {
  id: string;
  item_name: string;
  unit_cost: number;
}


export default function LoadJsonAsTableComponent(){

  const data: ShopStockJsonData[] = json_data;
  
  // console.log(json_data);

  return (
    <>
      <h2>Assignment 5. Load Json as Table</h2>
      <table className="my-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Item_name</th>
            <th>Unit_cost</th>
          </tr>
        </thead>
        
        <tbody>
          {data.map(item_obj => (
            <tr key={item_obj.id}>
              <td>{item_obj.id}</td>
              <td>{item_obj.item_name}</td>
              <td>{item_obj.unit_cost}</td>
            </tr>
          ))}
        </tbody>
        
      </table>
    </>
  )
}














