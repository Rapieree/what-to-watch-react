import React from 'react';
import {Link} from 'react-router-dom';

const MovieItem = ({movie}) => {
  const {name, imageSrc, id} = movie;

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={imageSrc}
          alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/` + id}>{name}</Link>
      </h3>
    </article>
  );
};

export default MovieItem;
