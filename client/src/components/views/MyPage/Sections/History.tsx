import React, {useState} from 'react';
import {HiSearch} from 'react-icons/hi';
import {GrClose} from 'react-icons/gr';
import '../MyPage.scss';
import MyPageModal from '../../../common/MyPageModal';

const History = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="mypage_container">
      <form className="mypage_search">
        <input placeholder="기사의 제목을 입력해주세요." />
        <HiSearch className="search_mypage_icon" />
      </form>
      <button
        className="button_delete_history_all"
        onClick={() => {
          setMessage('모든 뉴스 기록이 삭제됩니다. 삭제 하시겠습니까?');
          setIsClicked(!isClicked);
        }}
      >
        전체 삭제
      </button>
      <ul className="history_list">
        <li className="history_date">
          <div>
            <span>오늘</span>
            <GrClose
              className="button_delete_history"
              onClick={() => {
                setMessage('해당 날짜의 기록이 삭제됩니다. 삭제 하시겠습니까?');
                setIsClicked(!isClicked);
              }}
            />
          </div>
          <ul>
            <li>
              <span>
                [인천] 인천여성경제인협회, 산불 이재민에 천백만 원 성금
              </span>
              <GrClose
                className="button_delete_history"
                onClick={() => {
                  setMessage('해당 뉴스 기록이 삭제됩니다. 삭제 하시겠습니까?');
                  setIsClicked(!isClicked);
                }}
              />
            </li>
            <li>
              <span>
                [인천] 인천여성경제인협회, 산불 이재민에 천백만 원 성금
              </span>
              <GrClose className="button_delete_history" />
            </li>
          </ul>
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

export default History;
