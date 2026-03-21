import { useState } from "react";
import type { ReactElement } from "react";

export default function ArrayDropdown(): ReactElement {
  const dropdown_data_empty: string[] = [];
  const dropdown_data_filled: string[] = ['C', 'C++', 'Java', 'AdvJava', 'WPT'];

  const [options, setOptions] = useState<string[]>(dropdown_data_empty);

  return (
    <>
      <h2>Assignment 2. Array as Dropdown</h2>
      <select>
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>

      ------
      <button onClick={() => setOptions(dropdown_data_filled)}>
        Add Data to Dropdown
      </button>
    </>
  );
}


