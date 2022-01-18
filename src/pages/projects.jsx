import React from 'react';
import { ProjectsContainer } from '../containers';
import { db } from '../utils/firebase';

export default function Projects() {
  return (
    <div className="min-h-screen gradient-bg-services">
      <ProjectsContainer db={db} />
    </div>
  );
}
