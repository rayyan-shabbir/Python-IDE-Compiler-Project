import React, { useState } from "react";
import axios from "axios";
const cors = require("cors");

function App() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const runCode = async () => {
    try {
      const response = await axios.post("http://localhost:5000/execute", { code });
      setOutput(response.data.output);
    } catch (error) {
      console.error("Error:", error);
      setOutput("An APP error occurred.");
    }
  };

  return (
    <div className="App">
      <h1>Online Python IDE</h1>
      <div>
        <textarea
          placeholder="Enter your Python code here"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        ></textarea>
      </div>
      <button onClick={runCode}>Run</button>
      <div>
        <h2>Output:</h2>
        <pre>{output}</pre>
      </div>
    </div>
  );
}

export default App;
