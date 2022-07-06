import React, {useState} from 'react';
import './LoginPage.scss';

const LoginPage = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const idChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login">
      <form>
        <span className="service_title">IWANNA</span>
        <input placeholder="아이디" value={id} onChange={idChangeHandler} />
        <input
          placeholder="비밀번호"
          value={password}
          onChange={passwordChangeHandler}
        />
        <button>로그인</button>
      </form>
    </div>
  );
};

export default LoginPage;
