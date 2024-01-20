import ProfilePicture from "../ProfilePicture/ProfilePicture";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
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
        <h1 className="h1-title">Sadisha Galappatti</h1>
        <p className="p-title">Full Stack | Cloud | Developer</p>
        <div className="icon-bar">
          <a href="https://cv.sadishagalappatti.ca">
            <FontAwesomeIcon icon={faFile} />
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
          <a href="https://x.com/sadishag" target="_blank">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
