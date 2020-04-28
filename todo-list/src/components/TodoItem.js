import React, { Component } from 'react';
import classNames from 'classnames';
import checkImg from '../components/img/check.svg';
import checkDoneImg from '../components/img/check-done.svg';
import cancel from '../components/img/cancel.svg';

import './TodoItem.css'

class TodoItem extends Component {
  render() {
    const { item, onClick } = this.props;
    let url = checkDoneImg;
    if (item.isDone) {
      url = checkImg;
    }

    return (
      <div className={classNames('TodoItem', {
        'TodoItem-done': item.isDone
      })}>
        <img src={url} alt="check" width={32} height={28} onClick={onClick}/>
        <p>{item.title}</p>
        <img id="cancel" alt="cancel" src={cancel} width={16} height={28} />
      </div>
    );
  }
}

export default TodoItem;