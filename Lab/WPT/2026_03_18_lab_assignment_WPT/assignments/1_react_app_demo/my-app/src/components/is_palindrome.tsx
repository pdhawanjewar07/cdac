import { useState } from "react";

export default function PalindromeChecker() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState(""); // null?

  const is_palindrome = () => {
    let n = Number(num);

    if (isNaN(n)) {
      setResult("Invalid input");
      return;
    }

    const original: number = n;
    let reversed: number = 0;
    let remainder: number;

    while (n != 0){
      remainder = n % 10;
      reversed = (reversed * 10) + remainder;
      n = Math.floor(n / 10);
    }

    setResult(original === reversed ? "Palindrome" : "Not a Palindrome");
  };

  return (
    <fieldset>
      <legend>Check Palindrome</legend>

      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        placeholder="Enter number"
      />

      <br /><br />
      <button onClick={is_palindrome}>Check Palindrome</button>

      {/* If result: show result */}
      {result && <p>{result}</p>}

    </fieldset>

      
    
  );
}







