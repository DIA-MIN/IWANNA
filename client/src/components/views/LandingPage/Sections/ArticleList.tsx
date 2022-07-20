import React, {useState, useEffect} from 'react';
import '../../../common/news.scss';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import PopConfirm from '../../../common/PopConfirm';
import Articles from './Articles';
import {NewsTypes} from '../../../common/NewsType';

interface ArticleListProps {
  curCategory: string;
  news: NewsTypes[];
}

const ArticleList: React.FC<ArticleListProps> = ({curCategory, news}) => {
  const [hide, setHide] = useState(false);

  return (
    <div className="article_list">
      <div className="category_title">
        <div className="category_name">{curCategory}</div>
        <AiOutlineInfoCircle
          className="article_list_guide"
          onMouseOver={() => setHide(true)}
          onMouseOut={() => setHide(false)}
        />
        <PopConfirm
          hide={hide}
          message={`스크랩 아이콘을 눌러 관심있는 뉴스를 '추가'해보세요.`}
        />
      </div>
      <Articles news={news} />
    </div>
  );
};

export default ArticleList;
