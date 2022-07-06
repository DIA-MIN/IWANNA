import React from 'react';
import History from './History';
import Subscribe from './Subscribe';
import MyArticles from './MyArticles';
import AddArticle from './AddArticle';

interface MyPageContentsProps {
  curCategory: string;
}

const MyPageContents: React.FC<MyPageContentsProps> = ({curCategory}) => {
  return (
    <div className="mypage_contents">
      <div className="category_title">
        <div className="category_name">{curCategory}</div>
      </div>
      {curCategory === '구독한 기사' && <Subscribe />}
      {curCategory === '기록' && <History />}
      {curCategory === 'My 후속 기사' && <MyArticles />}
      {curCategory === '후속기사 추가' && <AddArticle />}
    </div>
  );
};

export default MyPageContents;
