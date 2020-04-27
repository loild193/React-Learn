import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import Filter from './components/Filter';

import tick from './components/img/tick.svg';


class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      left: 0,
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
  };

  onItemClicked(item) {   
    return (event) => {
      const isDone = item.isDone;
      const index = this.state.todoItems.indexOf(item);
      const {todoItems} = this.state;
      this.setState({
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
        todoItems: [
          { title: text, isDone: false },
          ...this.state.todoItems
        ]
      });
    } else {

    }
  }

  onChange(event) {
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
            todoItems: trueItems
          };
        }
      }
      return {
        todoItems: falseItems
      };
    });
  }

  render() {
    const {newItem, left, filter, todoItems} = this.state;
    let items = Object.values(todoItems);

    return (
      <div className="App">
        <div className="Header">
          <img 
            src={tick} 
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
          <Filter filter={filter} />
          <p>Clear completed</p>
        </div>
      </div>
    );
  } 
}

export default App;
