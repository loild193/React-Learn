import React, { Component } from 'react';


class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollaped: true
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      isCollaped: !this.state.isCollaped
    });
  }
  
  render() {
    const { heading, children } = this.props;
    const { isCollaped } = this.state;
    
    return (
      <div className="Accordion">
        <div className="Heading" onClick={this.onClick}>
          <h3>{heading}</h3>
        </div>
        { !isCollaped &&<div className="Content">{children}</div>}
      </div>
    );
  }
}

export default Accordion;