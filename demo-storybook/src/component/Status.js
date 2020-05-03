import React, { Component } from 'react';

import './Status.css';

class Status extends Component {
  render() {
    return <div className="Status">
      <div className="status-header">
        <h3>Bai viet</h3>
        <div className="option">
          <a href="#/">Bo loc</a>
          <a href="#/">Quan ly bai viet</a>
        </div>
      </div>
      <div className="status-look">
        <div className="list">Xem theo danh sach</div>
        <div className="list">Xem theo danh sach</div>
      </div>
    </div>
  }
}

export default Status;