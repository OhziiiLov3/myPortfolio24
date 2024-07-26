import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './ModalStyles.css';

const Modal = ({show, onClose, videoUrl, deployedUrl, githubUrl, description}) => {
    if (!show) {
        return null;
      }
    
  return (
    <div className="modal-overlay">
    <div className="modal-content">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <div className="modal-video">
        <video
            width="100%"
            height="315"
            controls
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="modal-links">
          <a href={deployedUrl} target="_blank" rel="noopener noreferrer">
            Deployed App <FaExternalLinkAlt />
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub Repo <FaGithub />
          </a>
        </div>
        <div className="modal-description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Modal