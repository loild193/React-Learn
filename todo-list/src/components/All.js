import React, { Component } from 'react';
import { Link } from "react-router-dom";

import '../App.css';
import TodoItem from './TodoItem';
import Active from './Active';
import Completed from './Completed';

import tick from './img/tick.svg';


class All extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { todoItems } = this.props;
    let clear = this.props.clear;

    for (const item of todoItems) {
      if (item.isDone) {
        clear = true;
        break;
      }
    }
    return (
      <div className="All">
        {
          todoItems.length > 0 && todoItems.map( (item, index) => 
          <TodoItem 
          key={index} 
          item={item} 
          onClick={this.props.onItemClicked(item)}
          onClearItem={this.props.onClearItem(item)}
          />)
        }
      </div>
    );
  } 
}

export default All;
