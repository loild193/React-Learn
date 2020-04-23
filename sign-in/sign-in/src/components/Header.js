import React, {Component} from 'react'; 


class Header extends Component {
  render() {
    return (
      <div className="Header">
        <a href="#">Go back</a>
        <img src="./logo.png"/>
        <button>Sign up</button>
      </div>
    );
  }
}

export default Header;