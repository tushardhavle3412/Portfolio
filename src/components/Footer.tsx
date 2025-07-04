import { FaLinkedin, FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footer-contact">
        <a
          href="https://www.linkedin.com/in/yujisato/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </a>

        <a href="tel:+918149913343">
          <FaPhoneSquareAlt /> +91 8149913343
        </a>

        <a href="mailto:tushardhavle001@gmail.com">
          <MdEmail /> tushardhavle001@gmail.com
        </a>
      </div>

      <p>
        A portfolio designed & built by{" "}
        <span className="footer-name">Tushar Dhawale</span> with 💜
      </p>
    </footer>
  );
}

export default Footer;
