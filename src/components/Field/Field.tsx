import React, { useMemo } from 'react'
import '@/Field/field.css'

interface IFieldProps {
  board: (string | null)[]
  index: number
  handleClick: (index: number) => void
  winPattern: number[] | null
}

const Field: React.FC<IFieldProps> = React.memo(
  ({ handleClick, index, board, winPattern }) => {
    const textColor = useMemo(() => {
      if (board[index] === 'X') {
        return { color: '#e74c3c' }
      } else if (board[index] === 'O') {
        return { color: '#3498db' }
      }
      return { color: 'inherit' }
    }, [board, index])

    const isWinningField = useMemo(
      () => winPattern?.includes(index),
      [winPattern, index]
    )

    return (
      <div
        className={`field ${isWinningField ? 'winning' : ''}`}
        onClick={() => handleClick(index)}
      >
        <span style={textColor}>{board[index]}</span>
      </div>
    )
  }
)

export default Field
