// Write your code here.
import './index.css'

function EmojiCard({src, alt, id, clickCardHandler}) {
  return (
    // eslint-disable-next-line
    <div className="card" onClick={() => clickCardHandler(id)}>
      <img src={src} alt={alt} />
    </div>
  )
}

export default EmojiCard
