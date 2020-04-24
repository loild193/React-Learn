import React, { Component } from 'react';

class Table extends Component {
  render() {
    const image = this.props.image;
    let style = {};
    if (image.isClick) {
      style = {
        width: '100px',
        transition: 'width 0.6s'
      }
    } else {
      style = {};
    }
    return (
      <td>
        <img 
        src={ image.src } 
        alt={ image.alt }
        width={ image.width } 
        style={style} 
        />
      </td>
    );
  }
}

export default Table;