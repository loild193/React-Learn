import React, {Component} from 'react'; 


class SubMenu extends Component {
  render() {
    return (
      <div className="SubMenu">
        <div className="icon">
          {this.props.icon}
        </div>
        <p className="name">
          {this.props.name}
        </p>
      </div>
    );
  }
}

export default SubMenu;