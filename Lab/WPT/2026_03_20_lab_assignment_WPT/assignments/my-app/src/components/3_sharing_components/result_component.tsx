import OperationDropdownComponent from "./operation_component"
import { useState } from "react";

export default function ResultComponent(){

  const [num1, setNum1] = useState(1)
  const [num2, setNum2] = useState(1)
  const [result, setResult] = useState(1)




  return(
    <>
      <h2>Assignment 3. Shared Components, Operations on Numbers</h2>

      <label htmlFor="num1">Num 1: </label>
      <input onChange={(e) => setNum1(Number(e.target.value))} id="num1" type="number" />
      ----
      <label htmlFor="num2">Num 2: </label>
      <input onChange={(e) => setNum2(Number(e.target.value))} id="num2" type="number" />
      ------
      <OperationDropdownComponent num1={num1} num2={num2}></OperationDropdownComponent>
      <fieldset>
        <legend>Result</legend>
        <h5>{result}</h5>
      </fieldset>
    </>
  )
}






