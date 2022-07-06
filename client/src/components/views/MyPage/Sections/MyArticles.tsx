import React, {useState} from 'react';
import {HiSearch} from 'react-icons/hi';
import {BiEdit} from 'react-icons/bi';
import UpdateModal from './../../../common/UpdateModal';

const MyArticles = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="mypage_container">
      <form className="mypage_search">
        <input placeholder="작성한 후속 기사를 입력해주세요." />
        <HiSearch className="search_mypage_icon" />
      </form>
      <ul className="my_articles_list">
        <li>
          <span>[인천] 인천여성경제인협회, 산불 이재민에 천백만 원 성금</span>
          <BiEdit
            className="edit_icon"
            onClick={() => setIsClicked(!isClicked)}
          />
        </li>
      </ul>
      {isClicked && (
        <UpdateModal isClicked={isClicked} setIsClicked={setIsClicked} />
      )}
    </div>
  );
};

export default MyArticles;
