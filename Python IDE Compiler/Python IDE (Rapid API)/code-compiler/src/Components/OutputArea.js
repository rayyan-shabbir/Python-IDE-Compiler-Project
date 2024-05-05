import React from 'react';

const OutputArea = ({ output }) => {
    return (
        <div>
            <h2>Output</h2>
            <pre>{output}</pre>
        </div>
    );
}

export default OutputArea;
