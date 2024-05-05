import React from 'react';

const CodeEditor = ({ code, onChange }) => {
    return (
        <div>
            <h2>Python Code</h2>
            <textarea
                value={code}
                onChange={e => onChange(e.target.value)}
                rows="20"
                cols="100"
            />
        </div>
    );
}

export default CodeEditor;
