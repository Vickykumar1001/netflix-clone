import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Player from "./pages/Player";
import Netflix from "./pages/Netflix";
import MoviePage from "./pages/Movies";
import TVShows from "./pages/TVShows";
import UserListedMovies from "./pages/UserListedMovies";
export default function App(){
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/login" element={<Signin/>} />
      <Route exact path="/signup" element={<Signup/>} />
      <Route exact path="/player" element={<Player/>} />
      <Route exact path="/tv" element={<TVShows />} />
      <Route exact path="/movies" element={<MoviePage/>} />
      <Route exact path="/new" element={<Player />} />
      <Route exact path="/mylist" element={<UserListedMovies />} />
      <Route exact path="/" element={<Netflix/>} />
      </Routes>
    </BrowserRouter>
  )
}