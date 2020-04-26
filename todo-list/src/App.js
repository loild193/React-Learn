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
      ],
      msg: {
        str: '', isAppear: false
      }
    };
    this.items = [
      { type: '1', lists: ['Item 1', 'Item 2', 'Item 3'], isRendered: true },
      { type: 'A', lists: ['Item 1', 'Item 2', 'Item 3'], isRendered: true },
      { type: 'a', lists: ['Item 1', 'Item 2', 'Item 3'], isRendered: false },
      { type: 'I', lists: ['Item 1', 'Item 2', 'Item 3'] },
      { type: 'i', lists: ['Item 1', 'Item 2', 'Item 3'] }
    ];

    this.onItemClicked = this.onItemClicked.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleClick() {
    this.setState((state) => {
      state.msg.isAppear = !state.msg.isAppear;
      console.log(state.msg.isAppear);
      if(state.msg.isAppear) {
        state.msg.str = 'You are awesome'       
      } else {
        state.msg.str = '';
      }
      return state.msg.str;
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
        <button onClick={this.handleClick}>Click me</button>
        <p>{this.state.msg.str}</p>
      </div>
    );
  } 
}

export default App;
