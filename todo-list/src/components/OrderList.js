import React, { Component } from 'react';

class OrderList extends Component {
  render() {
    const item = this.props.item;
    return (
      <ol type={item.type}>
        {
          item.isRendered && item.lists.map( (list, index) => <li key={index}>{list}</li>)
        }
      </ol>
    );   
  }
}

export default OrderList;