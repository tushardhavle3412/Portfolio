import "../assets/styles/Main.scss";
import { FaGoogleDrive, FaLinkedin } from "react-icons/fa";
import mainBg from "../assets/videos/main-bg.mp4";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <video
          className="background-video"
          src={mainBg}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="background-overlay"></div>
        <div className=" about-content-wrapper content z-10">
          <div className="name-role-wrapper">
            <span className="name">TUSHAR DHAWALE</span>
            <span className="role">MOTION GRAPHIC DESIGNER</span>
          </div>
          <div className="social_icons">
            <a
              href="https://drive.google.com/drive/folders/1NSl006CJEaqPPllykvA8tCmF9fXqKs8D"
              target="_blank"
              rel="noreferrer"
            >
              <FaGoogleDrive />
            </a>
            <a
              href="https://www.linkedin.com/in/yujisato/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>

          <div className="mobile_social_icons">
            <a
              href="https://www.linkedin.com/in/yujisato/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://drive.google.com/drive/folders/1NSl006CJEaqPPllykvA8tCmF9fXqKs8D"
              target="_blank"
              rel="noreferrer"
            >
              <FaGoogleDrive />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
