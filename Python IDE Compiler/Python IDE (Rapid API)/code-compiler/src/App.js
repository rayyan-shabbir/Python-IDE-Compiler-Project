import React, { useState } from 'react';
import CodeEditor from './components/CodeEditor';
import OutputArea from './components/OutputArea';
import RunButton from './components/RunButton';
import axios from 'axios'; // Import Axios

const App = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const runCode = async () => {
    try {
      const response = await axios.post('http://localhost:5000/run', {
        code: code,
      });

      const data = response.data;

      if (data.output) {
        setOutput(data.output);
      } else {
        setOutput('Error occurred while running the code.');
      }
    } catch (error) {
      setOutput('Error occurred while running the code.');
    }
  };

  return (
    <div>
      <h1>Python Code Runner</h1>
      <CodeEditor code={code} onChange={setCode} />
      <RunButton onClick={runCode} />
      <OutputArea output={output} />
    </div>
  );
}

export default App;
