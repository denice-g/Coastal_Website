import symbolRev from '../assets/symbol-rev.png'

// Image block. Pass `src` + `alt` for a real project photo; otherwise renders a branded placeholder.
export default function Media({ src, alt = '', label, portrait = false }) {
  return (
    <div className={`media${portrait ? ' portrait' : ''}`}>
      {src ? (
        <img className="photo" src={src} alt={alt} />
      ) : (
        <>
          <img src={symbolRev} alt="" />
          <span>{label}</span>
        </>
      )}
    </div>
  )
}
