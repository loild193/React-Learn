import React, {Component} from 'react'; 


class Header extends Component {
  render() {
    return (
      <div className="Header">
        <a href="http://facebook.com">Go back</a>
        <img src="./logo.png" alt="test"/>
        <button>Sign up</button>
      </div>
    );
  }
}

export default Header;