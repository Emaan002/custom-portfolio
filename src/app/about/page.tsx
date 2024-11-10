import React from "react";
import Image from "next/image";
import "../styles/about.css";
import { Spotlight } from "../../../components/ui/Spotlight";
import MagicButton from "../../../components/ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

function About() {
  return (
    <>
      <section className="about-section">
        <Spotlight className="spotlight-purple" fill="purple" />

      <div className="absolute inset-0 flex items-center justify-center dark:bg-black-100 bg-white dark:bg-grid-small-white/[0.3] bg-grid-small-black/[0.3]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
        <div className="background-overlay">
          <div className="mask-overlay" />
        </div>

        <div className="content-container">
          <div className="content-wrapper">
            <div className="text-container">
              <h2 className="about-title">About Us</h2>
              <p className="about-description">
                I am a passionate web developer with a strong foundation in front-end technologies.
                My expertise lies in <span className="highlighted-text">HTML, CSS, and JavaScript</span>,
                which allow me to craft visually appealing and responsive web applications.
                <span className="highlighted-text"> I am also proficient in modern frameworks like React and Next.js.</span>
              </p>
            </div>

            <div className="image-container">
              <Image
                src="/pic.jpg"
                alt="Profile Picture"
                layout="fill"
                objectFit="cover"
                className="profile-image"
              />
            </div>
          </div>

          <div className="button-container">
            <a
              href="https://www.linkedin.com/in/hafsa-sagheer-ahmed-737251311"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-button"
            >
              <MagicButton
                title="LinkedIn"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
