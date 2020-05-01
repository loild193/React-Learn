import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

Table.propTypes = {
  image: PropTypes.shape({
    isClick: PropTypes.bool,
    src: PropTypes.string,
    alt: PropTypes.string,
    width: PropTypes.number
  })
}

export default Table;