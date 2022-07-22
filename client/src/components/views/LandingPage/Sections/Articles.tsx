import React, {useState, useEffect} from 'react';
import {BsBookmark, BsBookmarkFill} from 'react-icons/bs';
import '../../../common/common.scss';
import {NewsTypes, ScrapNewsTypes} from '../../../common/NewsType';
import BookMark from './BookMark';

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
              <div
                className="article_title"
                onClick={() => window.open(news.url, '_blank')}
              >
                {news.title}
              </div>
              <BookMark url={news.url} title={news.title} />
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
