import React from 'react';
import './RegisterPage.scss';
import {useNavigate} from 'react-router';

const ChoicePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="choice">
      <h2>회원 구분</h2>
      <ul>
        <li onClick={() => navigate('/register/user')}>
          <img src="img/nomal_user.png" />
          <span>일반회원</span>
        </li>
        <li onClick={() => navigate('/register/reporter')}>
          <img src="img/journalist.png" />
          <span>기자회원</span>
        </li>
      </ul>
    </div>
  );
};

export default ChoicePage;
