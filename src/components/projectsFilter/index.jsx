import React, { useEffect, useState } from 'react';
import { CategoryBadge } from '../';

function ProjectsFilter({ db, setActiveCategories }) {
  const [categories, setCategories] = useState([]);

  const getCategories = (db) => {
    db.collection('categoriesProjects').onSnapshot((snapshot) => {
      const categories = [];
      snapshot.forEach((doc) => {
        categories.push({ id: doc.id, ...doc.data() });
      });
      setCategories(categories);
    });
  };

  useEffect(() => {
    getCategories(db);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      <CategoryBadge setActiveCategories={setActiveCategories} title="All" id={null} />
      {categories.map((cat) => (
        <CategoryBadge setActiveCategories={setActiveCategories} key={cat.id} title={cat.title} id={cat.id} />
      ))}
    </div>
  );
}

export default ProjectsFilter;
