import React, { Component } from 'react';
import classNames from 'classnames';


import './TodoItem.css'

class TodoItem extends Component {
  render() {
    const { item, onClick } = this.props;

    return (
      <div onClick={onClick} className={classNames('TodoItem', {
        'TodoItem-done': item.isDone
      })}>
        <p>{item.title}</p>
      </div>
    );
  }
}

export default TodoItem;