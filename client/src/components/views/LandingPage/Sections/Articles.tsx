import React from 'react';
import {BsBookmark} from 'react-icons/bs';
import '../../../common/common.scss';
import {NewsTypes} from '../../../common/NewsType';

interface ArticlesProp {
  news: NewsTypes[];
}

const Articles: React.FC<ArticlesProp> = ({news}) => {
  return (
    <ul className="articles">
      {news &&
        news.map((news, idx) => (
          <li key={idx}>
            <div className="article_main">
              <div>{news.title}</div>
              <BsBookmark className="article_scrap" />
            </div>
          </li>
        ))}
    </ul>
  );
};

export default Articles;
