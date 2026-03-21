import { useState } from "react";

export default function DisplayMessage() {
  const [message, setMessage] = useState("");

  return (
    <fieldset>
      <legend>Display Message</legend>

      <input type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter message"
      />

      {/* If result: show result */}
      {message && <p>{message}</p>}

    </fieldset>

  );
}
