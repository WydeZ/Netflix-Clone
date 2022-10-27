import React, { useState } from 'react';
import { Header } from './components/Header';
import { Row } from './components/Row';
import { Nav } from './components/Nav';
import requests from './request';
import './style.css';

function App() {
  const [pickedMovie, setPickedMovie] = useState('')
  return (
    <div className="netflix">
      <Nav />
      <Header />
      <div className='Rows'>
        <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} isLarge={true}/>
        <Row title='Trending Now' fetchUrl={requests.fetchTrending}/>
        <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
        <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
        <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
        <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
        <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}/>
        <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
      </div>
    </div>
  );
}

export default App;
