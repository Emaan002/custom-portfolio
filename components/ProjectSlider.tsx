'use client';
import React, { useState } from 'react';
import "../src/app/styles/projectSlider.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface Project {
  image: string;
  title: string;
  description: string;
  githubLink: string;
  liveLink: string;
}

const projects: Project[] = [
  {
    image: '/cynthia.png',
    title: 'Clone of Cynthia ugwa',
    description: 'A modern, interactive website crafted with HTML, CSS, and JavaScript and Gsap for animation.',
    githubLink: 'https://github.com/Emaan002/cynthiaugwu-Website',
    liveLink: 'https://cynthiaugwu-website.vercel.app',
  },
  {
    image: '/resume.png',
    title: 'Resume Builder',
    description: 'This is a dynamic resume builder.',
    githubLink: 'https://github.com/Emaan002/milestone-5',
    liveLink: 'https://milestone-5-peach.vercel.app',
  },
  {
    image: '/Calculator.png',
    title: 'Calculator',
    description: 'Calculator using HTML, CSS, and JavaScript.',
    githubLink: 'https://github.com/Emaan002/Calculator-using-HTML-CSS-and-Javascript.',
    liveLink: 'https://calculator-using-html-css-and-javascript.vercel.app',
  },
  {
    image: '/health.png',
    title: 'Health Care web',
    description: 'This is my first website using HTML, CSS, and Javascript.',
    githubLink: 'https://github.com/Emaan002/Healthcare-website',
    liveLink: 'https://healthcare-website-eosin.vercel.app',
  },
  {
    image: '/cricket.png',
    title: 'Cricket Accessories website',
    description: 'This website is built with Next.js.',
    githubLink: 'https://github.com/Emaan002/Cricket-Accessories-web',
    liveLink: 'https://cricket-accessories-web.vercel.app',
  },
];

const ProjectSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="project-slider-container">
      <div className="slider-wrapper">
        <div
          className="slider-content"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  GitHub Repo
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-link"
                >
                  Live Preview
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button onClick={goToPrevious} className="slider-button prev-button">
        <FaArrowLeft />
      </button>
      <button onClick={goToNext} className="slider-button next-button">
        <FaArrowRight />
      </button>
    </div>
  );
};

export default ProjectSlider;
