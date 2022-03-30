import React from 'react'

interface Props {
  value: number
}

interface State {
  value: string | null
}

class Square extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      value: null
    }
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => this.setState({value: 'X'})}
      >
        {this.state.value}
      </button>
    )
  }
}

export default Square
