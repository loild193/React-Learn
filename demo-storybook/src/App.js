import React, { Component } from 'react';
import WeeklySongListItem from './component/WeeklySongListItem';
import Status from './component/Status';

class App extends Component {
  render() {
    return <div className="App">
      <WeeklySongListItem
        order="01"
        title="Em Không Thể"
        singer="Tiên Tiên, Touliver"
        viewCount={3000} />
        <Status />
    </div>;
  }
}

export default App;
