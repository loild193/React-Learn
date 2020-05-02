import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Suggestion.css';

class Suggestion extends Component {
  render() {
    const { img, nickName } = this.props;
    return <div className="Suggestion">
      <div className="suggestion-header">
        <p>Goi y cho ban</p>
        <a href="#/">Xem tat ca</a>
      </div>
      <div className="suggestion-content">
        <div className="fr-suggestion">
          <div className="fr-info">
            <a href="#/">{img}</a>
            <div className="fr-name">
              <a href="#/">{nickName}</a>
              <p>Goi y cho ban</p>
            </div>
          </div>
          <a href="#/">Theo doi</a>
        </div>
        <div className="fr-suggestion">
          <div className="fr-info">
            <a href="#/">{img}</a>
            <div className="fr-name">
              <a href="#/">{nickName}</a>
              <p>Goi y cho ban</p>
            </div>
          </div>
          <a href="#/">Theo doi</a>
        </div>
        <div className="fr-suggestion">
          <div className="fr-info">
            <a href="#/">{img}</a>
            <div className="fr-name">
              <a href="#/">{nickName}</a>
              <p>Goi y cho ban</p>
            </div>
          </div>
          <a href="#/">Theo doi</a>
        </div>
      </div>
    </div>
  }
}

Suggestion.defaultProps = {
  img: 'img'
};

Suggestion.propTypes = {
  img: PropTypes.string,
  nickName: PropTypes.string.isRequired
};

export default Suggestion;