import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import OrderList from './components/OrderList';


class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      { title: 'Go to bed', isDone: true },
      { title: 'Play game', isDone: true },
      { title: 'Chat with gf'}
    ];
    this.items = [
      { type: '1', lists: ['Item 1', 'Item 2', 'Item 3'], isRendered: true },
      { type: 'A', lists: ['Item 1', 'Item 2', 'Item 3'], isRendered: true },
      { type: 'a', lists: ['Item 1', 'Item 2', 'Item 3'], isRendered: false },
      { type: 'I', lists: ['Item 1', 'Item 2', 'Item 3'] },
      { type: 'i', lists: ['Item 1', 'Item 2', 'Item 3'] }
    ];
  };
  render() {
    return (
      <div className="App">
        {
          this.todoItems.length > 0 && this.todoItems.map( (item, index) => <TodoItem key={index} item={item}/> )
        }
        {
          this.todoItems.length === 0 && 'Nothing here'
        }
        <p>Use only HTML to set list type</p>
        {
          this.items.map( (item, index) => <OrderList key={index} item={item}/>)
        }
      </div>
    );
  } 
}

export default App;
