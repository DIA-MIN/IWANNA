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
              <div onClick={() => window.open(news.url, '_blank')}>
                {news.title}
              </div>
              <BsBookmark className="article_scrap" />
            </div>
            {news.description ? (
              <div className="article_sub">{news.description}</div>
            ) : null}
          </li>
        ))}
    </ul>
  );
};

export default Articles;
