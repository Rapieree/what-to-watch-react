import {genres} from "../utils/const";

export const getAdaptedMoviesList = (movies) => {
  return movies.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
      year: movie.year,
      genres: movie.genres.filter((genre) => !!genres.find((genreSource) => genreSource === genre)),
      backgroundSrc: movie[`background_image_original`],
      posterSrc: movie[`medium_cover_image`],
      imageSrc: movie[`medium_cover_image`],
    };
  });
};

export const getAdaptedMovieDetail = (movie) => {
  return {
    id: movie.id,
    title: movie.title,
    year: movie.year,
    genre: movie.genres[0],
    backgroundSrc: movie[`large_screenshot_image1`],
    posterSrc: movie[`medium_cover_image`],
    imageSrc: movie[`medium_cover_image`],
  };
};
