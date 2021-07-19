/* eslint-disable react/jsx-curly-brace-presence */
// Write your code here.
import './index.css'

function WinLossCard({status, count, playAgainHandler}) {
  return (
    <section>
      <div>
        <h1>You {status}!</h1>
        <h3>{status === 'Won' ? 'Best Score' : 'Score'}</h3>
        <h2>{count}/12</h2>
        <button type="button" onClick={playAgainHandler}>
          Play Again
        </button>
      </div>
      <div>
        <img
          src={`https://assets.ccbp.in/frontend/react-js/${status.toLowerCase()}-game-img.png`}
          alt={status}
        />
      </div>
    </section>
  )
}

export default WinLossCard
