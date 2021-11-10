import React from 'react';

const Poster = ({posterSrc, altText, modifier}) => {
  return (
    <div className={`movie-card__poster ${modifier}`}>
      <img src={posterSrc} alt={altText} width="218"
        height="327" />
    </div>
  );
};

export default Poster;
