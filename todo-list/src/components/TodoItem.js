import React, { Component } from 'react';
import './TodoItem.css'

class TodoItem extends Component {
  render() {
    const item = this.props.item;
    let className = 'TodoItem';
    if (item.isDone) {
      className += ' TodoItem-done';
    }
    return (
      <div className={className}>
        <p>{item.title}</p>
      </div>
    );
  }
}

export default TodoItem;