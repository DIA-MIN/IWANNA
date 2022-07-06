import React, {useState} from 'react';
import {HiSearch} from 'react-icons/hi';
import MyPageModal from './../../../common/MyPageModal';

const Subscribe = () => {
  const [isClicked, setIsClicked] = useState(false);
  const message = '해당 기사의 구독을 취소하시겠습니까?';

  return (
    <div className="mypage_container">
      <form className="mypage_search">
        <input placeholder="기사의 제목을 입력해주세요." />
        <HiSearch className="search_mypage_icon" />
      </form>
      <ul className="subscribe_list">
        <li>
          <span>[인천] 인천여성경제인협회, 산불 이재민에 천백만 원 성금</span>
          <button onClick={() => setIsClicked(!isClicked)}>구독 취소</button>
        </li>
      </ul>
      {isClicked && (
        <MyPageModal
          message={message}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
        />
      )}
    </div>
  );
};

export default Subscribe;
