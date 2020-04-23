import React, {Component} from 'react'; 


class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <label> Keep me sign in
          <input type="checkbox" checked="checked"/>
        </label>
      </div>
    );
  }
}

export default Footer;