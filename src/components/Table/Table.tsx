import { useState, useCallback } from 'react'
import Field from '@/Field/Field'
import GameResInfo from '@/GameResInfo/GameResInfo'
import './Table.css'

export default function Table() {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null))
  const [player, setPlayer] = useState('X')
  const [gameEnd, setGameEnd] = useState(false)
  const [draw, setDraw] = useState(false)
  const [winPattern, setWinPattern] = useState<number[] | null>(null)

  const resetGame = useCallback(() => {
    setPlayer('X')
    setBoard(Array(9).fill(null))
    setGameEnd(false)
    setDraw(false)
    setWinPattern(null)
  }, [])

  function checkWin(board: (string | null)[], player: string): number[] | null {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns
      [0, 4, 8],
      [2, 4, 6], // diagonals
    ]

    for (const pattern of winPatterns) {
      const [a, b, c] = pattern
      if (board[a] === player && board[b] === player && board[c] === player) {
        return pattern
      }
    }

    const isDraw = board.every((cell) => cell !== null)
    if (isDraw) {
      setDraw(true)
    }

    return null
  }

  const handleClick = useCallback(
    (index: number) => {
      if (board[index] === null && !gameEnd && !draw) {
        const newBoard = [...board]
        newBoard[index] = player
        setBoard(newBoard)

        const winningPattern = checkWin(newBoard, player)
        if (winningPattern) {
          setGameEnd(true)
          setWinPattern(winningPattern)
        } else {
          setPlayer(player === 'X' ? 'O' : 'X')
        }
      }
    },
    [board, player, gameEnd, draw]
  )
  return (
    <>
      <GameResInfo
        gameEnd={gameEnd}
        draw={draw}
        player={player}
      />
      <div className='wrapper'>
        {board.map((_, index) => (
          <Field
            key={index}
            index={index}
            handleClick={handleClick}
            board={board}
            winPattern={winPattern}
          />
        ))}
      </div>

      {(gameEnd || draw) && (
        <button
          className='resetBtn'
          onClick={resetGame}
        >
          Заново
        </button>
      )}
    </>
  )
}
