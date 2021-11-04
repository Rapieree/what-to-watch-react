import './App.css';
import React from 'react';
import MainPage from './pages/MainPage';
import MovieCard from './components/MovieCard/MovieCard';
import MovieDetailsPage from './pages/MovieDetailsPage';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';

function App() {

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
