import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <tbody>
        <tr className="Table">
          <td>{this.props.company}</td>
          <td>{this.props.contact}</td>
          <td>{this.props.country}</td>
        </tr>
      </tbody>
    );
  }
}

export default Table;