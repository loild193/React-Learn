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
    this.records = [
      { company:  "Alfreds_Futterkiste", contact: "Maria_Anders", country: "Germany" },
      { company:  "Centro_comercial_Moctezuma", contact: "Francisco_Chang", country: "Mexico" },
      { company:  "Ernst_Handel", contact: "Roland_Mendel", country: "Austria" },
      { company:  "Island_Trading", contact: "Helen_Bennett", country: "UK" }
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
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
          </tbody>      
          {
            this.records.map( (record, index) => <Table 
            key={index} 
            company={record.company} 
            contact={record.contact} 
            country={record.country}
            />)
          }            
        </table>      
      </div>
    );
  } 
}

export default App;
