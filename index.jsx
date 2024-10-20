import React from "react";
import ReactDOM from "react-dom/client"

function setup() {
    return (
        <div>
            <h1>Welcome to the Home of React</h1>
            <ul>
                <li>Warehousing</li>
                <li>Heavy Machines</li>
            </ul>
        </div>
    )
}

ReactDOM.render(<setup />, document.getElementById('root'));