import { useState } from "react";
import type {ReactElement} from "react";



export default function OperationDropdownComponent(num1: number, num2: number): ReactElement {
  const [operation, setOperation] = useState<string>("add");

  function computeResult(operation: string){
    //
    switch (operation) {
      case "add":
        
        break;

      case "subtract":
        
        break;

      case "multiply":
        
        break;

      case "divide":
        
        break;
    
      default:
        break;
    }





  }


  return (
    <>
      
      ------
      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
      >
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
      </select>

      {/* <p>Selected operation: {operation}</p> */}
    </>
  );
}


