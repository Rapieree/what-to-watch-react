const END_POINT = `https://yts.mx/api/v2`;

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

const load = async (url) => {
  const response = await fetch(url);

  if (response.ok) {
    const json = await response.json();

    return json.data;
  }

  return throwHttpError(response.status);
};

export const fetchMovieDetail = commonErrorWrapper(async (movieId) => {
  return load(`${END_POINT}/movie_details.json?movie_id=${movieId}&with_images=true&with_cast=true`);
});

export const fetchMoviesList = commonErrorWrapper(async (genre = `all`, count = 40, page = 1) => {
  return load(`${END_POINT}/list_movies.json?genre=${genre}&limit=${count}&page=${page}`);
});

export const fetchSimilarFilms = commonErrorWrapper(async (movieId) => {
  return load(`${END_POINT}/movie_suggestions.json?movie_id=${movieId}`);
});
