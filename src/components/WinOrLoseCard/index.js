/* eslint-disable react/jsx-curly-brace-presence */
// Write your code here.
import './index.css'

function WinLossCard({status, count, playAgainHandler}) {
  return (
    <section>
      <div className="stats">
        <h1>You {status}</h1>
        <p>{status === 'Won' ? 'Best Score' : 'Score'}</p>
        <p className="h2">{count}/12</p>
        <button type="button" onClick={playAgainHandler}>
          Play Again
        </button>
      </div>
      <div className="image">
        <img
          src={`https://assets.ccbp.in/frontend/react-js/${status.toLowerCase()}-game-img.png`}
          alt={status}
        />
      </div>
    </section>
  )
}

export default WinLossCard
