import React, {useState} from 'react';
import {HiSearch} from 'react-icons/hi';
import WriteModal from './../../../common/WriteModal';
import {
  article_temp_data,
  article_reporter_data,
} from '../../../temp-data/data';

const AddArticle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const clickModalHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    writeCheck: boolean
  ) => {
    if (!writeCheck) {
      setIsClicked(!isClicked);
    }
  };
  return (
    <div className="mypage_container">
      <form className="mypage_search">
        <input placeholder="검색할 기사를 입력해주세요." />
        <HiSearch className="search_mypage_icon" />
      </form>
      <ul className="add_article_list">
        {article_reporter_data.map((article) => (
          <li>
            <div className={'article_main'}>
              <span>{article.title}</span>
              <button
                className={
                  article.isWrite
                    ? 'button_article_follow'
                    : 'button_article_follow clamp'
                }
                onClick={(e) => clickModalHandler(e, article.isWrite)}
              >
                작성
              </button>
              <div className={'article_follows'}>
                {article.follow_num
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </div>
            </div>
          </li>
        ))}
      </ul>
      {isClicked && (
        <WriteModal isClicked={isClicked} setIsClicked={setIsClicked} />
      )}
    </div>
  );
};

export default AddArticle;
