// Write your code here.
import './index.css'

function EmojiCard({src, alt, id, clickCardHandler}) {
  return (
    // eslint-disable-next-line
    <li className="card" onClick={() => clickCardHandler(id)}>
      <img src={src} alt={alt} />
    </li>
  )
}

export default EmojiCard
