import * as React from 'react';
import './App.css';
import SpreadSheet from './components/spreadsheet'
import Header from './components/header'

interface Props {
  text?: string
}

interface State {
  objName: string
}

export interface SelectObjEvent extends React.FormEvent<HTMLInputElement> {
  target: HTMLInputElement;
}

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      objName: ''
    }
    this.handleObjChange = this.handleObjChange.bind(this)
  }

  handleObjChange(e: SelectObjEvent) {
    this.setState({
      objName: e.target.value
    })
  }

  public render() {
    return (
      <div className="App">
        <Header onchange={this.handleObjChange} />
        <SpreadSheet />
      </div>
    );
  }
}

export default App;








  // handleObjChange(e: SelectObjEvent) {
  //   console.log('call!!')
  //   this.setState({
  //     objName: e.target.value
  //   })
  //   const remoteController = new Service().getRemoting()
  //   console.log(remoteController)
  //   new Promise((resolve, reject) => {
  //     console.log('promise')
  //     remoteController['fetchAccounts'](['Account'], (res: any, evt: any) => {
  //       console.log('remote!!')
  //       if (evt.status) resolve(res)
  //       else console.error('error:' + evt)
  //     })
  //   })
  //   .then((res) => {console.log(res)})
  // }