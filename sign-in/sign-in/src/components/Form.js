import React, {Component} from 'react'; 


class Form extends Component {
  render() {
    return (
      <form className="Form">
        <input type="text" 
          name="username" 
          placaeholder="Luong Quy Tan"/>
        <input type="password"
          name="password"
        />
        <button>Signin to Coders-x</button>
      </form>
    );
  }
}

export default Form;