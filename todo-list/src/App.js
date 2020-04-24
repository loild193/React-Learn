import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import Table from './components/Table';


class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      { title: 'Go to bed', isDone: true },
      { title: 'Play game', isDone: true },
      { title: 'Chat with gf'}
    ];
    this.images = [
      { src: "http://bit.ly/3ayPusa", alt: "Image 1", width: 200, isClick: true },
      { src: "http://bit.ly/3ayPusa", alt: "Image 1", width: 200 },
      { src: "http://bit.ly/3ayPusa", alt: "Image 1", width: 200 }
    ];
  };
  render() {
    return (
      <div className="App">
        {
          this.todoItems.map( (item, index) => <TodoItem key={index} item={item}/> )
        }
        <table>
          <tbody>
            <tr>
              <th>Image column 1</th>
              <th>Image column 2</th>
              <th>Image column 3</th>
            </tr>
          </tbody>
          <tbody> 
            <tr>     
              {
                this.images.map( (image, index) => <Table key={index} image={image} />)
              }
            </tr>
          </tbody>              
        </table>      
      </div>
    );
  } 
}

export default App;
