import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {getCurrentMovieIdAction} from '../../store/actions';

const MovieItem = ({movie}) => {
  const {title, imageSrc, id} = movie;

  const currentMovieId = useSelector((state) => state.currentMovieId);
  const dispatch = useDispatch();

  const onLinkClick = () => {
    if (currentMovieId !== id) {
      dispatch(getCurrentMovieIdAction(id));
    }
  };

  return (
    <article className="small-movie-card catalog__movies-card" >
      <div className="small-movie-card__image" onClick={onLinkClick}>
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
