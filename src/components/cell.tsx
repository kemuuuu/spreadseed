import * as React from 'react'

const styles = {
  cell_box: {
    // border: '1px solid black'
  },
  cell_input: {
    // height: '10px',
    // width: '30px'
  }
}

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
  }

  handleInputChange(e: CellInputEvent) {
    this.setState({
      value: e.target.value
    })
  }

  render(): JSX.Element {
    return(
      <div style={{gridRow: this.props.row, gridColumn: this.props.column}}>
        <input 
          style={styles.cell_input}
          type="text" 
          name={this.props.row + "-" + this.props.column} 
          value={this.state.value} 
          onChange={this.handleInputChange}/>
      </div>
    )
  }
}