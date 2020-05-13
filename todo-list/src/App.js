import React, { Component } from 'react';
import {
  Switch,
  Route,
  Link,
  BrowserRouter as Router
} from "react-router-dom";

import './App.css';
import Completed from './components/Completed';
import Active from './components/Active';
import All from './components/All';

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
      todoItems: localStorage.getItem("todoItems") == null ? [] : JSON.parse(localStorage.getItem("todoItems"))
    }

    this.onItemClicked = this.onItemClicked.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.HandleImgClick = this.HandleImgClick.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
    this.onClearItem = this.onClearItem.bind(this);
  }

  componentDidMount() {
    const { todoItems } = this.state;
    let count = 0;

    for (const item of todoItems) {
      if (!item.isDone)
        count ++;
    }

    this.setState({
      left: count
    });
  }

  onItemClicked(item) {   
    return (event) => {
      const isDone = item.isDone;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      let count = this.state.left;

      if (item.isDone) {
        count ++; 
      } else {
        count --;
      }

      localStorage.setItem("todoItems", JSON.stringify([
        ...todoItems.slice(0, index),
        {
          ...item,
          isDone: !isDone
        },
        ...todoItems.slice(index + 1)
        ]
      ));

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

      localStorage.setItem("todoItems", JSON.stringify([
        { title: text, isDone: false },
        ...this.state.todoItems
        ]
      ));

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
          localStorage.setItem("todoItems", JSON.stringify(trueItems));
          return {
            left: 0,
            todoItems: trueItems
          };
        }
      }
      localStorage.setItem("todoItems", JSON.stringify(falseItems));
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
        let newFilter = [];

        for (let filt of filter) {
          if (filter.indexOf(filt) === index) {
            let newFilt = {...filt, isChoiced:true};
            newFilter.push(newFilt);
          } else {
            let newFilt = {...filt, isChoiced:false};
            newFilter.push(newFilt);
          }
        }

        return {
          filter: newFilter
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
    localStorage.setItem("todoItems", JSON.stringify(trueItems));
    this.setState({
      todoItems: trueItems
    });
  }

  onClearItem(item) {
    return () => {
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      let count = this.state.left;

      if (!item.isDone) {
        count --;
      }

      localStorage.setItem("todoItems", JSON.stringify([
        ...todoItems.slice(0, index),
        ...todoItems.slice(index + 1)
        ]
      ));

      this.setState({
        left: count,
        todoItems: [
          ...todoItems.slice(0, index),
          ...todoItems.slice(index + 1)
        ]
      });
    }
  }

  render() {
    const { left, filter, todoItems} = this.state;
    let clear = this.state.clear;
    let items = Object.values(todoItems);
    let { newItem } = this.state;

    for (const item of items) {
      if (item.isDone) {
        clear = true;
        break;
      }
    }
    return (
      <div className="App">
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

        <Router>
          <Switch>
            <Route path="/completed">
              <Completed 
                completedItems={items.filter((item) => item.isDone === true)} 
                clear={clear}
                items={items}
                onClearItem={this.onClearItem}
                onItemClicked={this.onItemClicked}
              />
            </Route>
            <Route path="/active">
              <Active  
                activeItems={items.filter((item) => item.isDone === false)} 
                clear={clear}
                items={items}
                onClearItem={this.onClearItem}
                onItemClicked={this.onItemClicked}
              />
            </Route>
            <Route path="/" component={All}>
              <All 
                clear={clear}
                todoItems={items}
                onItemClicked={this.onItemClicked}
                onSpanClick={this.onSpanClick}
                clearCompleted={this.clearCompleted}
                onClearItem={this.onClearItem}
              />
            </Route>
          </Switch>
      
        <div className="Footer">
          {
            (left === 0 || left === 1) && <p>{left} item left</p>
          }
          {
            (left !== 0 && left !== 1) && <p>{left} items left</p>
          } 
          <div className="Filter">
            {
              filter.map( (fil, index) => {
                if (fil.isChoiced) {
                  return <Link
                    to={`/${fil.choice.toLowerCase()}`}
                    key={index}
                    style={{border: "1px solid #ffa2a2", 
                    padding: "2px 8px",
                    borderRadius: "3px",
                    color: "rgb(33, 33, 33)"}}
                    onClick={this.onSpanClick(fil)}>
                    {fil.choice}
                  </Link>;
                }
                return <Link
                  to={`/${fil.choice.toLowerCase()}`}
                  key={index}
                  style={{padding: "2px 8px",
                  color: "rgb(33, 33, 33)"}} 
                  onClick={this.onSpanClick(fil)}>
                  {fil.choice}
                  </Link>;
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
        </Router>
      </div>
    );
  } 
}

export default App;
