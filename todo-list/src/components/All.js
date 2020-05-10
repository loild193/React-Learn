import React, { Component } from 'react';
import {
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import '../App.css';
import TodoItem from './TodoItem';
import Completed from './Completed';
import Active from './Active';

import tick from './img/tick.svg';


class All extends Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      left: 1,
      filter: [
        { choice: 'All', isChoiced: true },
        { choice: 'Active', isChoiced: false }, 
        { choice: 'Completed', isChoiced: false }
      ],
      clear: false,
      todoItems: [
        { title: 'Go to bed', isDone: true },
        { title: 'Play game', isDone: true },
        { title: 'Chat with gf', isDone: false}
      ]
    };

    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.HandleImgClick = this.HandleImgClick.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
  };

  onItemClicked(item) {   
    return (event) => {
      const isDone = item.isDone;
      const index = this.state.todoItems.indexOf(item);
      const {todoItems} = this.state;
      let count = this.state.left;

      if (item.isDone) {
        count ++; 
      } else {
        count --;
      }

      this.setState({
        left: count,
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isDone: !isDone
          },
          ...todoItems.slice(index + 1)
        ]
      });
    }
  }

  onKeyUp(event) {
    if (event.keyCode === 13) {
      let text = event.target.value;

      if (!text) {
        return ;
      }

      text = text.trim();
      if (!text) { return ; }

      this.setState({
        newItem: '',
        left: this.state.left + 1,
        todoItems: [
          { title: text, isDone: false },
          ...this.state.todoItems
        ]
      });
    }
  }

  onChange(event) {
    console.log(this.state.todoItems);
    this.setState({
      newItem: event.target.value
    });
  }

  HandleImgClick() {
    this.setState((state) => {
      const todoItems = state.todoItems;
      
      let trueItems = [];
      for (let item of todoItems) {
        let newItem = {...item, isDone: true};
        trueItems.push(newItem);
      }
      let falseItems = [];
      for (let item of todoItems) {
        let newItem = {...item, isDone: false};
        falseItems.push(newItem);
      }

      for (let item of todoItems) {
        if (!item.isDone) {
          return {
            left: 0,
            todoItems: trueItems
          };
        }
      }
      return {
        left: todoItems.length,
        todoItems: falseItems
      };
    });
  }

  onSpanClick(fil) {
    return (event) => {
      this.setState((state) => {
        const index = state.filter.indexOf(fil);
        const {filter} = state;
        const todoItems = state.todoItems;
        let newFilter = [];
        let choice;

        for (let filt of filter) {
          if (filter.indexOf(filt) === index) {
            let newFilt = {...filt, isChoiced:true};
            choice = filt.choice;
            newFilter.push(newFilt);
          } else {
            let newFilt = {...filt, isChoiced:false};
            newFilter.push(newFilt);
          }
        }

        let trueItems = [];
        for (let item of todoItems) {
          if (item.isDone)
            trueItems.push(item);
        }

        let falseItems = [];
        for (let item of todoItems) {
          if (!item.isDone)
            falseItems.push(item);
        }
        if (choice === 'Active') {
          return {
            filter: newFilter
          }
        } else if (choice === 'Completed') {
          return {
            filter: newFilter
          }
        }
      });
    };
  }

  clearCompleted(){
    const {todoItems} = this.state;
    let trueItems = [];
    
    for (let item of todoItems) {
      if (!item.isDone)
        trueItems.push(item);
    }

    this.setState({
      todoItems: trueItems
    });
  }

  render() {
    const {newItem, left, filter, todoItems} = this.state;
    let clear = this.state.clear;
    let items = Object.values(todoItems);

    for (const item of items) {
      if (item.isDone) {
        clear = true;
        break;
      }
    }
    return (
      <div className="All">
        <div className="Header">
          <img 
            src={tick}
            alt="tick" 
            width="32" 
            height="30" 
            onClick={this.HandleImgClick}
          />
          <input 
            type="text" 
            placeholder="What needs to be done?"
            value={newItem}
            onChange={this.onChange}
            onKeyUp={this.onKeyUp}
          />
        </div>
        {
          items.length > 0 && items.map( (item, index) => 
          <TodoItem 
          key={index} 
          item={item} 
          onClick={this.onItemClicked(item)}/> 
          )
        }
        {
          items.length === 0 && 'Nothing here'
        }
        <div className="Footer">
          <p>{left} items left</p>
          <div className="Filter">
            {
              filter.map( (fil, index) => {
                if (fil.isChoiced) {
                  return <Link
                    to={`/${fil.choice.toLowerCase()}`}
                    key={index}
                    style={{border: "1px solid #ffa2a2", 
                    padding: "2px 8px",
                    borderRadius: "3px"}}
                    onClick={this.onSpanClick(fil)}>
                    {fil.choice}
                  </Link>;
                }
                return <Link
                  to={`/${fil.choice.toLowerCase()}`}
                  key={index}
                  style={{padding: "2px 8px"}} 
                  onClick={this.onSpanClick(fil)}>
                  {fil.choice}</Link>;
              })
            } 
          </div>
          {
            clear === true && 
            <p style={{visibility: "visible"}} onClick={this.clearCompleted} >Clear completed</p>
          }
          {
            clear === false && 
            <p style={{visibility: "hidden"}} onClick={this.clearCompleted} >Clear completed</p>
          }
        </div>
      </div>
    );
  } 
}

export default All;
