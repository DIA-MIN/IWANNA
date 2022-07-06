import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/views/Header/Header';
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import ChoicePage from './components/views/RegisterPage/ChoicePage';
import MyPage from './components/views/MyPage/MyPage';

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/choice" element={<ChoicePage />} />
          <Route path="/register/:classfication" element={<RegisterPage />} />
          <Route path="/mypage/:type" element={<MyPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
