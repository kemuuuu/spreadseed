import * as React from 'react'
import Cell from './cell'

const styles = {
  wrapper: {
    display: 'grid'
  }
}

export default class SpreadSheet extends React.Component {

  createSheetHtml(): JSX.Element {
    const sheet: JSX.Element[][] = new Array()
    for (let rn: number = 1; rn < 11; rn++) {
      const tmp: JSX.Element[] = new Array
      for (let col: number = 1; col < 11; col++) {
        tmp.push(<Cell row={rn} column={col} />)
      }
      sheet.push(tmp)
    }
    return <div style={styles.wrapper}>{sheet}</div>
  }

  render() {
    const sheetHtml: JSX.Element = this.createSheetHtml()
    return (
      <div>
        {sheetHtml}
      </div>
    )
  }
}