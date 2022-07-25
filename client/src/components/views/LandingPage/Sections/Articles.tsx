import React, {useEffect, useState} from 'react';
import {BsBookmark, BsBookmarkFill} from 'react-icons/bs';
import '../../../common/common.scss';
import {NewsTypes, ScrapNewsTypes} from '../../../common/types/NewsType';
import {SCRAP_KEY} from './../../../../Config';

interface ArticlesProp {
  news: NewsTypes[];
}

const Articles: React.FC<ArticlesProp> = ({news}) => {
  const [scraps, setScraps] = useState<ScrapNewsTypes[]>(() => {
    const data = localStorage.getItem(SCRAP_KEY);
    if (data !== null) {
      return JSON.parse(data);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(SCRAP_KEY, JSON.stringify(scraps));
  }, [scraps]);

  const addScrap = (url: string, title: string) => {
    const newsData = {
      url,
      title,
    };
    setScraps([...scraps, newsData]);
  };

  const removeScrap = (url: string) => {
    console.log('clicked del', scraps);
    setScraps(scraps.filter((data) => data.url !== url));
  };

  return (
    <ul className="articles">
      {news &&
        news.map((news, idx) => (
          <li key={idx}>
            <div className="article_main">
              <div className="article_title">
                <a href={news.url} target="_blank">
                  {news.title}
                </a>
              </div>
              {scraps && scraps.map((data) => data.url).includes(news.url) ? (
                <BsBookmarkFill
                  className="article_scrap"
                  onClick={() => removeScrap(news.url)}
                />
              ) : (
                <BsBookmark
                  className="article_scrap"
                  onClick={() => addScrap(news.url, news.title)}
                />
              )}
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
