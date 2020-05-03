import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CreateStatus.css';

class CreateStatus extends Component {
  render() {
    const { src } = this.props;
    
    return <div className="CreateStatus">
      <div className="status-header">
        <p>Tao bai viet</p>
      </div>
      <div className="status-content">
        <a href="#/">{src}</a>
        <textarea name="newStatus" placeholder="What do you mean?">
        </textarea>
      </div>
      <div className="status-footer">
        <a href="#/">Anh/Video</a>
        <a href="#/">Gan the ban be</a>
        <a href="#/">Cam xuc</a>
        <a href="#/">...</a>
      </div>
    </div>
  }
}

CreateStatus.propTypes = {
  src: PropTypes.string.isRequired
}

export default CreateStatus;