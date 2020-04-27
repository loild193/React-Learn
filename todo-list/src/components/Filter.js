import React, { Component } from 'react';
import classNames from 'classnames';

import './Filter.css';

class Filter extends Component {
  render() {
    const { filter } = this.props;

    return (
      <div className={classNames('Filter')}>
        {
          filter.map( (com) => <p>{com.choice}</p>)
        }
      </div>
    );
  }
}

export default Filter;