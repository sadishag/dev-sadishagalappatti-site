import ProfilePicture from "../ProfilePicture/ProfilePicture";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faXTwitter,
  faGithubAlt,
} from "@fortawesome/free-brands-svg-icons";

import "./styles.css";

const TitleSection = () => {
  return (
    <div className="title-section">
      <ProfilePicture />
      <div className="name-title">
        <h1>Sadisha Galappatti</h1>
        <p>Full Stack | Cloud | Developer</p>
        <div className="icon-bar">
          <a href="resume">
            <FontAwesomeIcon icon={faFilePdf} />
          </a>
          <a href="mailto:sadishag@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://github.com/sadishag" target="_blank">
            <FontAwesomeIcon icon={faGithubAlt} />
          </a>
          <a href="https://www.linkedin.com/in/sadishag/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://x.com/sadishagx" target="_blank">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
