import React, {useState} from 'react';
import {useNavigate} from 'react-router';
import './Header.scss';
import RightMenu from './Sections/RightMenu';

const Header = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [isUser, setIsUser] = useState(true);

  return (
    <div className="header">
      <div className="logo" onClick={() => navigate('/')}>
        IWANNA
      </div>
      <RightMenu isLogin={isLogin} isUser={isUser} />
    </div>
  );
};

export default Header;
