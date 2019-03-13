import * as React from 'react'
import Cell from './cell'
import './spreadsheet.css'

interface Props {
  text?: string
}

interface State {
  maxRow: number,
  maxCol: number
}

export default class SpreadSheet extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      maxCol: 20,
      maxRow: 20
    }
    this.handleAddRow = this.handleAddRow.bind(this)
    this.handleAddCol = this.handleAddCol.bind(this)
  }

  handleAddRow() :void {
    const currow: number = this.state.maxRow
    this.setState({
      maxRow: currow+1
    })
  }

  handleAddCol() :void {
    const curcol: number = this.state.maxCol
    this.setState({
      maxRow: curcol+1
    })
  }

  createSheetHtml(): JSX.Element {
    const sheet: JSX.Element[][] = new Array()
    for (let rn: number = 1; rn < this.state.maxRow; rn++) {
      const tmp: JSX.Element[] = new Array()
      for (let col: number = 1; col < this.state.maxCol; col++) {
        tmp.push(<Cell row={rn} column={col} />)
      }
      sheet.push(tmp)
    }
    return <div className='wrapper'>{sheet}</div>
  }

  render() {
    const sheetHtml: JSX.Element = this.createSheetHtml()
    return (
      <div className='container'>
        <div className='box__sheet'>
          {sheetHtml}
        </div>
        <div onClick={this.handleAddRow} className='add-button-box__row'>
          add row
        </div>
        {/* <div onClick={this.handleAddCol} className='add-button-box__col'>
          add col
        </div> */}
      </div>
    )
  }
}