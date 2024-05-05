import React from 'react';

const RunButton = ({ onClick }) => {
    return (
        <div>
            <button onClick={onClick}>Run Code</button>
        </div>
    );
}

export default RunButton;
