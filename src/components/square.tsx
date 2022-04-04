import React from 'react'

interface Props {
  value: 'X' | 'O' | null
  onClick: () => void
}

const Square: React.FC<Props> = (props: Props) => {
  return (
    <button
        className="square"
        onClick={() => props.onClick()}
      >
        {props.value}
      </button>
  )
}

export default Square
