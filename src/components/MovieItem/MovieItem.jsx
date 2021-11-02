import React from 'react';

const MovieItem = ({ movie }) => {
  const {name, imageSrc, detailsLink} = movie;

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={imageSrc}
          alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href={detailsLink}>{name}</a>
      </h3>
    </article>
  );
};

export default MovieItem;
