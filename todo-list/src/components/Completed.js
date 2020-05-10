import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Active from './Active';
import TodoItem from './TodoItem';

import cancel from '../components/img/cancel.svg';
import tick from './img/tick.svg';



import './TodoItem.css'
import '../App.css'

class Completed extends Component {
  onItemClicked(item) {   
    return (event) => {
      const isDone = item.isDone;
      const index = this.props.completedItems.indexOf(item);
      let {completedItems} = this.props;
      let count = this.props.left;

      if (item.isDone) {
        count ++; 
      } else {
        count --;
      }

      this.props.left = count;
      completedItems = [
        ...completedItems.slice(0, index),
        {
          ...item,
          isDone: !isDone
        },
        ...completedItems.slice(index + 1)
      ];
    }
  }

  HandleImgClick() {
    let {completedItems} = this.props;
      
    let trueItems = [];
    for (let item of completedItems) {
      let newItem = {...item, isDone: true};
      trueItems.push(newItem);
    }
    let falseItems = [];
    for (let item of completedItems) {
      let newItem = {...item, isDone: false};
      falseItems.push(newItem);
    }

    for (let item of completedItems) {
      if (!item.isDone) {
        return {
          left: 0,
          completedItems: trueItems
        };
      }
    }
    return {
      left: completedItems.length,
      completedItems: falseItems
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
    const { completedItems, filter, left, items } = this.props;
    for (let fil of filter) {
      if (fil.choice === 'Completed') {
        fil.isChoiced = true;
      }
      else {
        fil.isChoiced = false;
      }
    }
    let clear = this.props.clear;
    for (const item of completedItems) {
      if (item.isDone) {
        clear = true;
        break;
      }
    }

    return (
        <div className="App" style={{margin: "0 auto"}}>
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
            />
          </div>
          {
            completedItems.length > 0 && completedItems.map( (item, index) => 
            <TodoItem 
            key={index} 
            item={item} 
            onClick={this.onItemClicked(item)}/> 
            )
          }
          {
            completedItems.length === 0 && 'Nothing here'
          }
          <div className="Footer">
            <p>{left} items left</p>
            <div className="Filter">
              {
                filter.map( (fil, index) => {
                  if (fil.isChoiced) {
                    return <Link
                      to={`/${fil.choice}`}
                      key={index}
                      style={{border: "1px solid #ffa2a2", 
                      padding: "2px 8px",
                      borderRadius: "3px"}}>
                      {fil.choice}</Link>;
                  }
                  return <Link
                    to={`/${fil.choice}`}
                    key={index}
                    style={{padding: "2px 8px"}}>
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
          <Switch>
            <Route path="/Active">
              <Active filter="Active" item={items.filter((item) => item.isDone === false)} />
            </Route>
            {/* <Route path="/">

            </Route> */}
          </Switch>
        </div>
      
    );
  }
}

export default Completed;