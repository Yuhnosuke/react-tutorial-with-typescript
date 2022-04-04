import Square from './square'
import React from 'react'

interface Props {

}

interface State {
  squares: ('X' | 'O' | null)[]
}

class Board extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null)
    }
  }
  handleClick(i: number) {
    const squares = this.state.squares.slice()
    squares[i] = 'X'
    this.setState({squares: squares})
  }

  renderSquare(i: number) {
    return <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
          />
    }

  render() {
    const status: string = 'Next player: X'

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

export default Board
