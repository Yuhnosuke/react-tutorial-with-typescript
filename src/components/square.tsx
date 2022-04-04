import React from 'react'

interface Props {
  value: 'X' | 'O' | null
  onClick: () => void
}

class Square extends React.Component<Props> {
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
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    )
  }
}

export default Square
