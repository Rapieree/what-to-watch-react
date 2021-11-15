/* eslint-disable */

const throwHttpError = (statusCode) => {
  const httpError = new Error();
  httpError.message = `Error while executing request`;
  httpError.statusCode = statusCode;

  throw httpError;
};

const commonErrorWrapper = (apiFetch) => {
  return async (...args) => {
    try {
      return await apiFetch(...args);
    } catch (httpError) {
      const data = {
        error: {
          statusCode: httpError.statusCode || `404`,
          message: httpError.message,
        }
      };
      return data;
    }
  };
};

let fetchMovieDetail = async (movieId) => {
  let response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}&with_images=true&with_cast=true`);

  if (response.ok) {
    let json = await response.json();

    return json.data;
  }

  return throwHttpError(response.status);
};

let fetchMoviesList = async (genre = `all`, count = 40, page = 1) => {
  let response = await fetch(`https://yts.mx/api/v2/list_movies.json?genre=${genre}&limit=${count}&page=${page}`);

  if (response.ok) {
    let json = await response.json();

    return json.data;;
  }

  return throwHttpError(response.status);
};

let fetchSimilarFilms = async (movieId) => {
  let response = await fetch(`https://yts.mx/api/v2/movie_suggestions.json?movie_id=${movieId}`);

  if (response.ok) {
    let json = await response.json();

    return json.data;
  }

  return throwHttpError(response.status);
};

fetchMovieDetail = commonErrorWrapper(fetchMovieDetail);
fetchMoviesList = commonErrorWrapper(fetchMoviesList);
fetchSimilarFilms = commonErrorWrapper(fetchSimilarFilms);

export {fetchMovieDetail, fetchMoviesList, fetchSimilarFilms};
