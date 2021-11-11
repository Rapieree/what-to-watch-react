import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchMovieDetail, fetchSimilarFilms} from '../../services/api';

const MovieItem = ({movie}) => {
  const {title, imageSrc, id} = movie;

  const currentMovie = useSelector((state) => state.currentMovie);
  const dispatch = useDispatch();

  const onLinkClick = () => {
    if (currentMovie !== movie) {
      fetchMovieDetail(dispatch, movie.id);
      fetchSimilarFilms(dispatch, movie.id);
    }
  };

  return (
    <article className="small-movie-card catalog__movies-card" >
      <div className="small-movie-card__image" >
        <img
          src={imageSrc}
          alt={title}
          width="280"
          height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/` + id} onClick={onLinkClick}>{title}</Link>
      </h3>
    </article>
  );
};

export default MovieItem;
