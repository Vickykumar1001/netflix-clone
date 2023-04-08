import React from "react";
import styled from "styled-components";
import CardSlider from "./CardSlider";
import requests from '../requests'
export default function Slider() {
  return (
    <Container>
      <CardSlider title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals}/>
      <CardSlider title='Trending Now' fetchUrl={requests.fetchTrending}/>
      <CardSlider title='Top Rated' fetchUrl={requests.fetchTopRated}/>
      <CardSlider title='Action' fetchUrl={requests.fecthActionMovies}/>
      <CardSlider title='Comedy' fetchUrl={requests.fecthComdeyMovies}/>
      <CardSlider title='Horror' fetchUrl={requests.fecthHorrorMovies}/>
      <CardSlider title='Romance' fetchUrl={requests.fecthRomanceMovies}/>
      <CardSlider title='Documentaries' fetchUrl={requests.fecthDocumentaries}/>
    </Container>
  );
}

const Container = styled.div``;