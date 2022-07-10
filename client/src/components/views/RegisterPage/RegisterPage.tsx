import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useParams} from 'react-router';
import {registerUser} from '../../../_actions/user_action';
import {AppDispatch} from '../../../_reducers';
import './RegisterPage.scss';

const RegisterPage = () => {
  const {classfication} = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch<AppDispatch>();

  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const confirmPasswordChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const variables = {
      name,
      email,
      password,
    };

    dispatch(registerUser(variables));
  };

  return (
    <div className="register">
      <form onSubmit={onSubmit}>
        <span className="service_title">회원가입</span>
        <span className="required">*필수 입력</span>
        <div>
          <span className="required_icon">*</span>
          <input placeholder="이름" onChange={nameChangeHandler} value={name} />
        </div>
        <div>
          <span className="required_icon">*</span>
          <input
            placeholder="이메일"
            onChange={emailChangeHandler}
            value={email}
          />
        </div>
        <div>
          <span className="required_icon">*</span>
          <input
            placeholder="비밀번호"
            onChange={passwordChangeHandler}
            value={password}
          />
        </div>
        <div>
          <span className="required_icon">*</span>
          <input
            placeholder="비밀번호 확인"
            onChange={confirmPasswordChangeHandler}
            value={confirmPassword}
          />
        </div>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default RegisterPage;
