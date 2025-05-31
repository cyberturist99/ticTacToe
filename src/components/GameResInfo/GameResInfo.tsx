import '@/GameResInfo/GameResInfo.css'

interface IGameResInfo {
  gameEnd: boolean
  draw: boolean
  player: string
}
export const Results = {
  WIN: 'победил',
  DRAW: 'Ничья',
} as const

export type ResultsType = (typeof Results)[keyof typeof Results]

const GameResInfo: React.FC<IGameResInfo> = ({ gameEnd, draw, player }) => {
  let text = ''
  if (gameEnd && !draw) text = `${player} ${Results.WIN}`
  else if (draw && !gameEnd) text = `${Results.DRAW}`

  return <div className='gameResult'>{text}</div>
}
export default GameResInfo
