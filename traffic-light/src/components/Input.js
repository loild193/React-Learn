import React, { Component } from 'react';

class Input extends Component {
  constructor() {
    super();
    this.state ={
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return(
      <div className="Input">
        <p>Hello, {this.state.value}</p>
      <input id="typing-area" 
      type="text" 
      placeholder="Nhap ten cua ban" 
      value={this.state.value}
      onChange={this.handleChange} />
      </div>      
    );
  }
}

export default Input;