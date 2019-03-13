import * as React from 'react'
import './cell.css'

interface Props {
  row: number
  column: number
}

interface State {
  value: string
}

interface CellInputEvent extends React.FormEvent<HTMLInputElement> {
  target: HTMLInputElement;
}

export default class Cell extends React.Component<Props, State> {

  constructor (props: Props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e: CellInputEvent) {
    this.setState({
      value: e.target.value
    })
  }

  render(): JSX.Element {
    return(
      <div className='cell_box' style={{gridRow: this.props.row, gridColumn: this.props.column}}>
        <input 
          className='cell_input'
          type="text" 
          name={this.props.row + "-" + this.props.column} 
          value={this.state.value} 
          onChange={this.handleInputChange}/>
      </div>
    )
  }
}