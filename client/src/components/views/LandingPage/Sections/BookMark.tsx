import React from 'react';
import {BsBookmark, BsBookmarkFill} from 'react-icons/bs';
import {SCRAP_KEY} from '../../../../Config';
// import {NewsTypes} from '../../../common/NewsType';

interface BookMarkProps {
  url: string;
  title: string;
}

const BookMark: React.FC<BookMarkProps> = ({url, title}) => {
  const myNews = localStorage.getItem(SCRAP_KEY);

  const addScrap = () => {
    const newsData = {
      url,
      title,
    };
    if (myNews !== null) {
      const scraps = [newsData, ...JSON.parse(myNews)];
      localStorage.setItem(SCRAP_KEY, JSON.stringify(scraps));
    } else {
      localStorage.setItem(SCRAP_KEY, JSON.stringify([newsData]));
    }
  };

  const removeScrap = () => {
    if (myNews !== null) {
      const scraps = [...JSON.parse(myNews)].filter((data) => data.url !== url);
      localStorage.setItem(SCRAP_KEY, JSON.stringify(scraps));
    } else {
      alert('등록된 스크랩이 없습니다.');
    }
  };

  return (
    <div>
      {myNews && myNews.includes(url) ? (
        <BsBookmarkFill className="article_scrap" onClick={removeScrap} />
      ) : (
        <BsBookmark className="article_scrap" onClick={addScrap} />
      )}
    </div>
  );
};

export default BookMark;
