// Write your code here.

import './index.css'

function NavBar({count, status}) {
  return (
    <nav className="navbar">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="Logo"
        />
        <span>Emoji Game</span>
      </div>
      {status ? (
        <div>
          <p>Score: {count}</p>
          <p>Top Score: {localStorage.getItem('emojiGame') || 0}</p>
        </div>
      ) : (
        <div>&nbsp;</div>
      )}
    </nav>
  )
}

export default NavBar
