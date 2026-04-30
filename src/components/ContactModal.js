import { createPortal } from "react-dom";
import "../css/ContactModal.css";
import { SocialIcon } from 'react-social-icons';

const ContactModal = ({ onClose }) => {
  const stopClick = (e) => {
    e.stopPropagation(); // prevents closing when clicking inside modal
  };

  // This prevents nested behavior issues (card click + router + window click)
  // that caused flickering and unintended navigation when clicking contact links.
  // Using createPortal to render modal at the end of body and getting away from the nests, 
  // and now it appears above all other content avoiding the problems mentioned above.
  
  return createPortal(
    <div className="modal-overlay"
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      <div className="modal-box" onClick={stopClick}>
        <h3 className="modal-title">Contact Us</h3>

        <ul className="contact-list">
          <li>
            <a
              href="https://line.me/R/ti/p/@325uhrhr"
              className="contact-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon url="https://line.me/R/ti/p/@325uhrhr" />
              <span>LINE (Recommended)</span>
            </a>
          </li>

          <li>
            <a
              href="mailto:hahikeyuaono@gmail.com"
              className="contact-item"
            >
              <SocialIcon url="mailto:hahikeyuaono@gmail.com" />

              <span>Email</span>
            </a>
          </li>

          <li>
            <a
              href="https://www.facebook.com/yukiko.aono.716/"
              className="contact-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon url="https://www.facebook.com/yukiko.aono.716/" />
              <span>Facebook</span>
            </a>
          </li>
        </ul>
      </div>
    </div>,
    document.body
  );
};

export default ContactModal;