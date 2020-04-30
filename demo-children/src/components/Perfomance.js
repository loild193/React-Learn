import React, { Component } from 'react';

import './Perfomance.css';


class Perfomance extends Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    const { heading, children } = this.props;
    
    return (
      <div className="Perfomance">
        <div className="Heading">
          <h3>{heading}</h3>
        </div>
        <div className="Content">
          <div className="Cash">
            <a href="#/" className="Avatar"></a>
            <div className="Infor">
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Perfomance;