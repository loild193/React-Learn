import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Active from './Active';
import TodoItem from './TodoItem';
import All from './All';

import cancel from '../components/img/cancel.svg';
import tick from './img/tick.svg';



import './TodoItem.css'
import '../App.css'

class Completed extends Component {
  constructor(props) {
    super(props);
  }
  
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
    // let { items } = this.props;
      
    // let trueItems = [];
    // for (let item of items) {
    //   let newItem = {...item, isDone: true};
    //   trueItems.push(newItem);
    // }
    // let falseItems = [];
    // for (let item of items) {
    //   let newItem = {...item, isDone: false};
    //   falseItems.push(newItem);
    // }

    // for (let item of items) {
    //   if (!item.isDone) {
    //     return {
    //       left: 0,
    //       completedItems: trueItems
    //     };
    //   }
    // }

    // left = completedItems.length;
    // completedItems = falseItems
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
        <div className="Completed" style={{margin: "0 auto"}}>
          {
            completedItems.length > 0 && completedItems.map( (item, index) => 
            <TodoItem 
            key={index} 
            item={item} 
            onClick={this.onItemClicked(item)}/> 
            )
          }
          <Switch>
            <Route path="/Active">
              <Active filter="Active" item={items.filter((item) => item.isDone === false)} />
            </Route>
            {/* <Route path="/" component={All}>
            </Route> */}
          </Switch>
        </div>
      
    );
  }
}

export default Completed;