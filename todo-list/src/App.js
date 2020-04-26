import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import OrderList from './components/OrderList';


class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        { title: 'Go to bed', isDone: true },
        { title: 'Play game', isDone: true },
        { title: 'Chat with gf', isDone: false}
      ]
    };
    this.items = [
      { type: '1', lists: ['Item 1', 'Item 2', 'Item 3'], isRendered: true },
      { type: 'A', lists: ['Item 1', 'Item 2', 'Item 3'], isRendered: true },
      { type: 'a', lists: ['Item 1', 'Item 2', 'Item 3'], isRendered: false },
      { type: 'I', lists: ['Item 1', 'Item 2', 'Item 3'] },
      { type: 'i', lists: ['Item 1', 'Item 2', 'Item 3'] }
    ];

    this.onItemClicked = this.onItemClicked.bind(this);
  };

  onItemClicked(index) {   
    this.setState((state) => {
      return state.todoItems.map((item, i) => {
        if (i === index) {
          item.isDone = !item.isDone;
          return item;
        }
        else {
          return item;
        }
      });
    });
  }

  render() {
    const {todoItems} = this.state;
    let items = Object.values(todoItems);

    return (
      <div className="App">
        {
          items.length > 0 && items.map( (item, index) => 
          <TodoItem key={index} item={item} onClick={() => this.onItemClicked(index)}/> 
          )
        }
        {
          items.length === 0 && 'Nothing here'
        }
        <p>Use only HTML to set list type</p>
        {
          this.items.map( (item, index) => <OrderList key={index} item={item}/>)
        }
        <h2>Step number</h2>
        <button onClick={this.onMinusClick}>-</button>
        <span>{this.state.value}</span>
        <button onClick={this.onPlusClick}>+</button>
      </div>
    );
  } 
}

export default App;
