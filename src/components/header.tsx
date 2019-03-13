import * as React from 'react'
import { SelectObjEvent } from '../App'

interface State {
  text: string
}

interface Props {
  onchange: (e: SelectObjEvent) => void
}


export default class Header extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
  }

  render(): JSX.Element {
    return (
      <div>
        <select>
          <label>オブジェクト</label>
          <option value=''>---</option>
          <option value='Account'>Account</option>
          <option value='Contact'>Contact</option>
          <option value='Opportunity'>Opportunity</option>
        </select>
      </div>
    )
  }
}