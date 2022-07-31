import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/views/Header/Header';
import LandingPage from './components/views/LandingPage/LandingPage';
import Banner from './components/views/LandingPage/Sections/Banner';
import SearchPage from './components/views/SearchPage/SearchPage';

function App() {
  return (
    <Router>
      <Header />
      <Banner />
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
