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

  render() {
    const {todoItems} = this.state;
    let items = Object.values(todoItems);

    return (
      <div className="App">
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
        <p>Use only HTML to set list type</p>
        {
          this.items.map( (item, index) => <OrderList key={index} item={item}/>)
        }
      </div>
    );
  } 
}

export default App;
