import * as React from 'react';
import './App.css';
import SpreadSheet from './components/spreadsheet'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <SpreadSheet />
      </div>
    );
  }
}

export default App;
