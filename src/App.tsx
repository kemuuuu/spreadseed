import * as React from 'react';
import './App.css';
import SpreadSheet from './components/spreadsheet'
import Header from './components/header'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header />
        <SpreadSheet />
      </div>
    );
  }
}

export default App;
