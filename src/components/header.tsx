import * as React from 'react'

export default class Header extends React.Component {
  render(): JSX.Element {
    return (
      <div>
        <select>
          <label>オブジェクト</label>
          <option value=''>---</option>
        </select>
      </div>
    )
  }
}