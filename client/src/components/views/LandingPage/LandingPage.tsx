import React, {useState} from 'react';
import './LandingPage.scss';
import Banner from './Sections/Banner';
import News from './Sections/News';

const LandingPage: React.FC = () => {
  const [userType, setUserType] = useState('user'); // 임시 props
  const [isLogin, setIsLogin] = useState(true);

  return ( 
    <div className="landing">
      <Banner />
      <News userType={userType} isLogin={isLogin} />
    </div>
  );
};

export default LandingPage;
