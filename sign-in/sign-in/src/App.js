import React, { Component } from 'react';
import Header from './components/Header';
import Title from './components/Title';
import Form from './components/Form';
import Footer from './components/Footer';
import SubMenu from './components/SubMenu';


class App extends Component {
  constructor() {
    super();

    this.state = {
      value: 0
    }
    
    this.onMinusClick = this.onMinusClick.bind(this);
    this.onPlusClick = this.onPlusClick.bind(this);
  }

  onMinusClick() {
    this.setState((state) => {
      state.value --;
      return state.value;
    });
  }

  onPlusClick() {
    this.setState((state) => {
      state.value ++;
      return state.value;
    });
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Title />
        <Form />
        <Footer />
        <SubMenu icon="home" name="HOME"/>
        <SubMenu icon="deal" name="DEALS"/>
        <SubMenu icon="upload" name="UPLOAD"/>
        <SubMenu icon="work" name="WORK"/>
        <SubMenu icon="setting" name="SETTINGS"/>
  
        <h2>Step number</h2>
        <button onClick={this.onMinusClick}>-</button>
        <span>{this.state.value}</span>
        <button onClick={this.onPlusClick}>+</button>
      </div>
    );
  } 
}

export default App;
