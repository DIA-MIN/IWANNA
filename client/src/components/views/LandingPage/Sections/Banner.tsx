import React from 'react';
import '../LandingPage.scss';
import {HiSearch} from 'react-icons/hi';

const Banner = () => {
  return (
    <div className="banner">
      <h1>모든 뉴스의 소식이 궁금하다면?</h1>
      <form className="search_main">
        <input placeholder="원하시는 뉴스의 키워드를 검색해주세요." />
        <HiSearch className="search_main_icon" />
      </form>
      <ul>
        <li>러시아, 유엔 인권이사회서 퇴출...93개국 찬성</li>
        <li>신규 확진 20만 5,333명...사망 373명 위중증 1,093명</li>
        <li>朴,유영하 지지 호소..."못다 한 꿈 대신 이뤄줄 것"</li>
      </ul>
    </div>
  );
};

export default Banner;
