import React from "react";
import "../src/app/styles/hero.css";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero-section">
      <div>
        <Spotlight className="spotlight-white" fill="white" />
        <Spotlight className="spotlight-purple" fill="purple" />
        <Spotlight className="spotlight-blue" fill="blue" />
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center dark:bg-black-100 bg-white dark:bg-grid-small-white/[0.3] bg-grid-small-black/[0.3]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="background-overlay">
        <div className="mask-overlay" />
      </div>

      <div className="content-wrapper">
        <div className="content-container">
          <h1 className="subtitle">All About My Work as Developer</h1>
          <TextGenerateEffect
            className="main-title"
            words="Creating seamless digital experiences through modern web design"
          />
          <p className="intro-text">
            Hi, I&apos;m Emaan, a Front-end Developer based in Pakistan
          </p>

          <a href="/projects">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
