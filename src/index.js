console.log("Webpack ...");
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Todo from './todo'

const todos = ["英文","React練習","UDemy上課"]
// console.log(todos);

class Title extends Component {
  render() {
    return (
      <div>
        <h1>React Webpack</h1>
        <Todo todos={todos}/>
      </div>
    )
  }
}

ReactDOM.render(
    <Title/>,document.getElementById("root")
)
    

