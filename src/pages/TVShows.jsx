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
function TVShows() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.netflix.genres);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedGenre, setselectedGenre] = useState("99");

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser)  navigate("/login");
  });

  useEffect(() => {
    dispatch(getGenres());
    // eslint-disable-next-line
  }, []);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  function handleChange(e) {
    setselectedGenre(e.target.value);
    navigate("/tv");
  }

  const url ="https://api.themoviedb.org/3/discover/tv?api_key=" +API_KEY +"&with_genres=" +selectedGenre;
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
export default TVShows;
