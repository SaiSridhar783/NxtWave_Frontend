/* eslint-disable no-return-assign */
/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {useState, useEffect} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinLossCard from '../WinOrLoseCard'

function EmojiGame({emojisList}) {
  const shuffledEmojisList = () => emojisList.sort(() => Math.random() - 0.5)

  const [emoCount, setEmoCount] = useState(0)
  const [emoList, setEmoList] = useState([])
  const [playGame, setPlayGame] = useState(true)
  const [gameStatus, setGameStatus] = useState('Lose')

  const clickCardHandler = id => {
    if (emoList.includes(id)) {
      setPlayGame(false)
      setGameStatus('Lose')
    } else {
      setEmoList([...emoList, id])
      setEmoCount(prev => prev + 1)
    }
  }

  useEffect(() => {
    if (emoList.length === 12) {
      setGameStatus('Won')
      setPlayGame(false)
    }
  })

  const playAgainHandler = () => {
    setEmoCount(0)
    setGameStatus('Lose')
    setPlayGame(true)
    setEmoList([])
    const curr = JSON.parse(localStorage.getItem('emojiGame'))
    if (emoCount > +curr) localStorage.setItem('emojiGame', emoCount)
  }

  return (
    <div className="main-bg">
      <NavBar count={emoCount} status={playGame} />
      <main>
        <ul>
          {playGame &&
            shuffledEmojisList().map(emo => (
              <EmojiCard
                src={emo.emojiUrl}
                key={emo.id}
                alt={emo.emojiName}
                id={emo.id}
                clickCardHandler={clickCardHandler}
              />
            ))}
        </ul>
        {!playGame && (
          <WinLossCard
            status={gameStatus}
            count={emoCount}
            playAgainHandler={playAgainHandler}
          />
        )}
      </main>
    </div>
  )
}

export default EmojiGame
