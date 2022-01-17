import React from 'react';

function ProjectCarousel({ children }) {
  return (
    <div className="flex p-10 text-white justify-start border-solid border-4 border-red-900 overflow-x-scroll">
      {children}
    </div>
  );
}

export default ProjectCarousel;
