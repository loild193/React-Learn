import React, { Component } from 'react';
import classNames from 'classnames';
import checkImg from '../components/img/check.svg';
import checkDoneImg from '../components/img/check-done.svg';

import './TodoItem.css'

class TodoItem extends Component {
  render() {
    const { item, onClick } = this.props;
    let url = checkImg;
    if (item.isDone) {
      url = checkDoneImg;
    }

    return (
      <div className={classNames('TodoItem', {
        'TodoItem-done': item.isDone
      })}>
        <img src={url} width={32} height={28} onClick={onClick}/>
        <p>{item.title}</p>
      </div>
    );
  }
}

export default TodoItem;