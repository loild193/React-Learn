import React from 'react';
import Header from './components/Header';
import Title from './components/Title';
import Form from './components/Form';
import Footer from './components/Footer';
import SubMenu from './components/SubMenu';


function App() {
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
    </div>
  );
}

export default App;
