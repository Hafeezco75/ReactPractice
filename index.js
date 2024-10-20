/*ReactDOM.render(<h1>Hi, My name is Koffi kingston</h1>, document.querySelector("#root"))*/


/*ReactDOM.render(<ul><li>Buildings</li>
<li>Automobiles</li>
<li>Warehousing</li>
<li>Heavy Machines</li>
  </ul>, document.getElementsById("root"))*/


/*function NavBar(){
    return (
      <div>
        <h1>Welcome to the Home Of React</h1>
      </div>
    )
}*/


/*const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way of React"
h1.className = "header"
/*document.getElementsById("root").append()*/

import React from 'react'
import ReactDOM from "react-dom"


function NavBar() {
  return (
    <div>
      <h1>Welcome to my Youtube Channel</h1>
    </div>
  )
}

const page = (
  <div>
    <h1 className="header">This is JSX</h1>
    <p>This is a paragraph</p>
  </div>
)
console.log(page)


const element = <h1>Welcome to our Blog, how can I help you?</h1>
console.log(element)


ReactDOM.r(
  <NavBar/>,
  /*page,*/
  document.getElementById("root")
)


