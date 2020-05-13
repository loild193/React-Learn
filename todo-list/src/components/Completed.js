import React, { Component } from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import Active from './Active';
import TodoItem from './TodoItem';

import './TodoItem.css'
import '../App.css'

class Completed extends Component {

  render() {
    const { completedItems, onItemClicked, onClearItem, items } = this.props;

    return (
        <div className="Completed" style={{margin: "0 auto"}}>
          {
            completedItems.length > 0 && completedItems.map( (item, index) => 
            <TodoItem 
            key={index} 
            item={item} 
            onClick={onItemClicked(item)}
            onClearItem={onClearItem(item)}
            /> 
            )
          }
          <Switch>
            <Route path="/Active">
              <Active filter="Active" item={items.filter((item) => item.isDone === false)} />
            </Route>
          </Switch>
        </div>
      
    );
  }
}

export default Completed;