import React from 'react';
import "./HomeScreen.css";
import Nav from './Nav';
import Banner from './Banner';
import requests from './Requests';
import Row from './Row';

function HomeScreen() {
  return (
    <div className='homeScreen'>
      <Nav />

      <Banner />

      <Row
      title="NETFLIX ORIGNALS"
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
      />
      <Row
      title="Trending"
      fetchUrl={requests.fetchTrending}
      />

    </div>
  )
}

export default HomeScreen
