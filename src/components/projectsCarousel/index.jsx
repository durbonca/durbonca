import React from 'react';

function ProjectCarousel({ children }) {
  return (
    <div className="flex flex-wrap p-10 text-white justify-center border-solid border-4 border-red-900">{children}</div>
  );
}

export default ProjectCarousel;
