import React from 'react';
import "./HomeScreen.css";
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import requests from '../fetches/Requests';
import Row from '../components/Row';

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
