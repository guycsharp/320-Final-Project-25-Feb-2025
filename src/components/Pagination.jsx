import React from 'react';

const Pagination = ({ currentPage, setPage }) => {
  const handlePrevious = () => setPage(prev => Math.max(prev - 1, 1));
  const handleNext = () => setPage(prev => prev + 1);

  return (
    <div>
      <button onClick={handlePrevious}>Previous</button>
      <span>Page {currentPage}</span>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Pagination;
