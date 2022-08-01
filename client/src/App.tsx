import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/views/Header/Header';
import LandingPage from './components/views/LandingPage/LandingPage';
import Banner from './components/views/Banner/Banner';
import SearchPage from './components/views/SearchPage/SearchPage';
import Footer from './components/views/Footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Banner />
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/search/:keyword" element={<SearchPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
