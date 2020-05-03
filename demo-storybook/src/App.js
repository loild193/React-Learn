import React, { Component } from 'react';
import WeeklySongListItem from './component/WeeklySongListItem';
import Status from './component/Status';
import Suggestion from './component/Suggestion';
import CreateStatus from './component/CreateStatus';


class App extends Component {
  render() {
    return <div className="App">
      <WeeklySongListItem
        order="01"
        title="Em Không Thể"
        singer="Tiên Tiên, Touliver"
        viewCount={3000} />
        <Status />
        <Suggestion 
        img="" 
        nickName="sr_itsmyfault" />
        <CreateStatus src=""/>
    </div>;
  }
}

export default App;
