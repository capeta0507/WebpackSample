import React, { Component } from 'react'

class Todo extends Component {
  render() {
      const myTodo = this.props.todos
      console.log(myTodo);
    return (
      <div>
        <ol>
            {myTodo.map(
                (item,index) => (<li key={index}>{item}</li>)
            )}
        </ol>
      </div>
    )
  }
}
export default Todo
