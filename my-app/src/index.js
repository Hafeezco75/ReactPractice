import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const page = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
)

function Applet() {
    return (
        <div className="App">
            <App/>
        </div>
    )
}

ReactDOM.createRoot(<Applet />, document.getElementById("root"))






