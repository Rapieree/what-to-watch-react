/* eslint-disable */

import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {useEffect} from 'react/cjs/react.development';
import './App.css';
import MainPage from './pages/MainPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import {loadDetailsMovieAction, loadMoviesAction, loadSimilarMoviesAction} from './store/actions';
import {ALL_GENRES} from './utils/const';

// const COUNT_START_MOVIES = 20;

const App = () => {
  const currentMovieId = useSelector((state) => state.currentMovieId);

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentMovieId) {
      dispatch(loadDetailsMovieAction(currentMovieId));
      dispatch(loadSimilarMoviesAction(currentMovieId));
    }
  }, [currentMovieId]);

  // useEffect(() => {
  //   dispatch(loadMoviesAction(ALL_GENRES));
  // }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/films/:id">
          <MovieDetailsPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

/*
  - Как подгружать определенное количество фильмов в ALL_GENRES?
    - Запрос от апи даёт разные жанры, не все подходят, я никогда не знаю какое количество
      подходящих фильмов я получу и хватит мне их для показа при нажатия moreButton. Если не
      хватит, то придётся делать повторный запрос, плюс всегда нужно учитывать число фильмов
      запрашиваемых с сервера, т.е. (page, count) переменные в запросе. Кака я могу решить эти
      задачи?
        - Нужен стейт для хранения количества текущих фильмов
        - Нужен стейт для хранения состояний запросов с сервера (page, count)
          от разных жанров и ALL_GENRES тоже
        - В каком месте проводить дозапрос? Отдельная логика на уровне App приложения? Или спец.
          компонент для этого сделать?
        - Порядок проверки, сбора конечного количества фильмов
          - Делаем запрос на загрузку, в него стейт (page, count)
          - получаем ответ, фильтруем нужные жанры, получаем количество подходящих фильмов
          - если фильмов меньше нужного кол-ва - сохраняем куда-то фильмы, обновляем (page, count),
            делаем новый запрос, возможно запрос должен быть меньше предыдущего, в зависимости от
            % оставшихся до показа фильмов
          - Повторяем всё по кругу, пока не наберем нужное количество фильмов
          - сохраняем фильмы в стейт, обновляем (page, count)
          - По поводу количества фильмов, не нужно хранить количество фильмов отдельно, главное
            хранить (page, count) для запроса, и остаток фильмов не отображенных.
  - ИТОГО
    - Создать стейт информации для запросов (page, count, genres)
      - requestMoviesPages = {
          allGenres: 1,
          genre1: 2,
          genre2: 3,
        }
    - Создать стейт для количества не показанных фильмов
      - remainingMoviesCounts = {
        allGenres: 10
        genre1: 5
        genre2: 8
      }
    - Логика проверки, докачки фильмов
    - Логика проверки на одинаковые фильмы
*/
