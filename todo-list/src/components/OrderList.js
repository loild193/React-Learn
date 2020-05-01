import React, { Component } from 'react';
import PropTypes from 'prop-types';


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

OrderList.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string,
    isRendered: PropTypes.bool
  })
}

export default OrderList;