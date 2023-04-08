import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import CardSlider from "../components/CardSlider";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getGenres } from "../store";
import { API_KEY } from "../utils/constants";
function MoviePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.netflix.genres);
  const [isScrolled, setIsScrolled] = useState(false);
  const [url, setUrl]=useState("https://api.themoviedb.org/3/discover/movie?api_key=" +API_KEY +"&with_genres=28");
  useEffect(() => {
    dispatch(getGenres());
     // eslint-disable-next-line
  }, []);
 

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };


  function handleChange(e) {
    setUrl("https://api.themoviedb.org/3/discover/movie?api_key=" +API_KEY +"&with_genres=" +e.target.value);
    navigate("/movies");
  }
  return (
    <Container>
      <div className="navbar">
        <Navbar isScrolled={isScrolled} />
      </div>
      <div className="data">
        <Select className="flex" onChange={handleChange}>
          {genres.map((genre) => {
            return (
              <option value={genre.id} key={genre.id}>
                {genre.name}
              </option>
            );
          })}
        </Select>
      </div>

      <CardSlider title=" " fetchUrl={url} />
      <CardSlider title=" " fetchUrl={url + "&page=2"} />
      <CardSlider title=" " fetchUrl={url + "&page=3"} />
      <CardSlider title=" " fetchUrl={url + "&page=4"} />
      <CardSlider title=" " fetchUrl={url + "&page=5"} />
    </Container>
  );
}
const Select = styled.select`
  margin-left: 5rem;
  cursor: pointer;
  font-size: 1.4rem;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
`;
const Container = styled.div`
  .data {
    margin-top: 8rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
  }
`;
export default MoviePage;
