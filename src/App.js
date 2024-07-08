// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/Homepage';
import UpcomingPage from './components/UpcomingPage';
import MovieDetailPage from './components/MovieDetailPage';
import SearchedMoviePage from './components/SearchedMoviePage';
import TopRatedPage from './components/TopRatedPage';

function App() {
  return (
    <Router>
      <div className="App bg-secondary">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/top-rated" element={<TopRatedPage/>} />
          <Route path="/upcoming" element={<UpcomingPage/>} />
          <Route path="/movie/:id" element={<MovieDetailPage/>} />
          <Route path="/search/:query" element={<SearchedMoviePage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
