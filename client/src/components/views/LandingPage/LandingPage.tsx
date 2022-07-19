import React, {useState} from 'react';
import './LandingPage.scss';
import Banner from './Sections/Banner';
import News from './Sections/News';

const LandingPage: React.FC = () => {
  return (
    <div className="landing">
      <Banner />
      <News />
    </div>
  );
};

export default LandingPage;
