import React, { Component } from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import TodoItem from './TodoItem';
import Completed from './Completed';

import './TodoItem.css'
import '../App.css'

class Active extends Component {

  render() {
    const { activeItems, onItemClicked, onClearItem, items } = this.props;

    return (
        <div className="Active" style={{margin: "0 auto"}}>
          {
            activeItems.length > 0 && activeItems.map( (item, index) => 
            <TodoItem 
            key={index} 
            item={item} 
            onClick={onItemClicked(item)}
            onClearItem={onClearItem(item)}
            /> 
            )
          }
          <Switch>
            <Route path="/completed">
              <Completed filter="Completed" item={items.filter((item) => item.isDone === true)} />
            </Route>
          </Switch>
        </div>  
    );
  }
}

export default Active;