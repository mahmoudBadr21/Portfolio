import { useEffect } from 'react'
import './messagePopup.css'

const MessagePopup = ({ popup, setPopup, popupContent }) => {
  useEffect(() => {
      if (popup) {
        const timer = setTimeout(() => setPopup(false), 3000);
        return () => clearTimeout(timer);
      }
    }, [popup, setPopup]);

  return (
    <article className='message-popup'>
      <div className="message-popup-container">
        <p>{popupContent}</p>
        <button className="btn btn-primary" onClick={() => setPopup(false)}>
          Close
        </button>
      </div>
    </article>
  )
}

export default MessagePopup