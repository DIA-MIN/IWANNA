import {stringify} from 'querystring';
import React, {useState, useEffect} from 'react';
import {BsBookmark} from 'react-icons/bs';
import {SCRAP_KEY} from '../../../../Config';
import '../../../common/common.scss';
import {NewsTypes, ScrapNewsTypes} from '../../../common/NewsType';

interface ArticlesProp {
  news: NewsTypes[];
}

const Articles: React.FC<ArticlesProp> = ({news}) => {
  // const [scrapNews, setScrapNews] = useState<ScrapNewsTypes[]>([]);
  // const scraps: ScrapNewsTypes[] = JSON.parse(localStorage.getItem(SCRAP_KEY));

  const addScrap = (news: NewsTypes) => {
    const getNews = localStorage.getItem(SCRAP_KEY);
    const newsData = {
      url: news.url,
      title: news.title,
    };
    if (getNews !== null) {
      const scraps = [newsData, ...JSON.parse(getNews)];
      localStorage.setItem(SCRAP_KEY, JSON.stringify(scraps));
    } else {
      localStorage.setItem(SCRAP_KEY, JSON.stringify([newsData]));
    }
  };

  // const checkScrap = (key: string) => {
  //   if (scraps !== null) {
  //     // JSON.parse(scraps).find(news => news.url )
  //   }
  // };

  return (
    <ul className="articles">
      {news &&
        news.map((news, idx) => (
          <li key={idx}>
            <div className="article_main">
              <div onClick={() => window.open(news.url, '_blank')}>
                {news.title}
              </div>
              <BsBookmark
                className="article_scrap"
                onClick={() => addScrap(news)}
              />
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
