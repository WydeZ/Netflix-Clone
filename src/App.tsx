import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Row } from './components/Row';
import { Nav } from './components/Nav';
import requests from './request';
import { Popup } from './components/Popup';
import './style.css';

function App() {
  const [popup, setPopup] = useState<any>(false);

  useEffect(() => {
    if(popup !== false) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [popup])

  return (
    <div className='netflix'>
      <Nav />
      <Header setPopup={setPopup}/>
      <div className='Rows'>
        <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} isLarge={true}  setPopup={setPopup}/>
        <Row title='Trending Now' fetchUrl={requests.fetchTrending} setPopup={setPopup}/>
        <Row title='Top Rated' fetchUrl={requests.fetchTopRated} setPopup={setPopup}/>
        <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} setPopup={setPopup}/>
        <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} setPopup={setPopup}/>
        <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} setPopup={setPopup}/>
        <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} setPopup={setPopup}/>
        <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} setPopup={setPopup}/>
      </div>

      {popup && 
        <Popup popup={popup} setPopup={setPopup} />
      }
    </div>
  );
}

export default App;
