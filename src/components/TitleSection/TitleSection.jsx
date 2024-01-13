import ProfilePicture from "../ProfilePicture/ProfilePicture";
import "./styles.css";

const TitleSection = () => {
  return (
    <div className="title-section">
      <ProfilePicture />
      <div className="name-title">
        <h1>Sadisha Galappatti</h1>
        <p>Full Stack | Cloud | Developer</p>
      </div>
    </div>
  );
};

export default TitleSection;
