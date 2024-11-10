import { FaLocationArrow } from "react-icons/fa";
import "../styles/contact.css";
import MagicButton from "../../../components/ui/MagicButton";
import { Spotlight } from "../../../components/ui/Spotlight";

function Contact() {
  return (
    <div className="contact-container">
      <Spotlight className="spotlight-overlay" fill="purple" />
      <div className="absolute inset-0 flex items-center justify-center dark:bg-black-100 bg-white dark:bg-grid-small-white/[0.3] bg-grid-small-black/[0.3]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="form-container">
        <div className="background-overlay">
          <div className="mask-overlay" />
        </div>
        <div className="form-box">
          <h2 className="form-heading">Contact Me</h2>
          <form className="contact-form" id="contact-form">
            <input
              type="text"
              placeholder="Your Name"
              className="input-field"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input-field"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="textarea-field"
              required
            />
            <MagicButton title="Send Message" icon={<FaLocationArrow />} position="right" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
