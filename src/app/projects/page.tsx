
// import React from 'react';
// import ProjectSlider from '../../../components/ProjectSlider';
// import { Spotlight } from '../../../components/ui/Spotlight';

// const Home: React.FC = () => {
//   return (
//     <>
//     <Spotlight className="absolute top-1/4 left-1/2 transform -translate-x-1/2 h-[80vh] w-[80vw] md:w-[50vw]" fill="purple" />
//     <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-small-white/[0.3] bg-grid-small-black/[0.3] flex items-center justify-center">
//       <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
//       <div className="container mx-auto px-4">
//         <ProjectSlider />
//       </div>
//     </div>
//   </>
//   );
// };

// export default Home;

import React from 'react';
import "../styles/project.css"
import ProjectSlider from '../../../components/ProjectSlider';
import { Spotlight } from '../../../components/ui/Spotlight';

const Home: React.FC = () => {
  return (
    <>
      <Spotlight className="spotlight-overlay" fill="purple" />
      <div className="home-container">
      <div className="absolute inset-0 flex items-center justify-center dark:bg-black-100 bg-white dark:bg-grid-small-white/[0.3] bg-grid-small-black/[0.3]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
        <div className="background-overlay" />
        <div className="content-container">
          <ProjectSlider />
        </div>
      </div>
    </>
  );
};

export default Home;
