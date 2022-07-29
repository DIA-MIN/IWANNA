import React, {useEffect, useState} from 'react';
import {BsBookmark, BsBookmarkFill} from 'react-icons/bs';
import {useAppDispatch} from '../../../../store';
import {
  uploadScrapNews,
  addScrapNews,
  removeScrapNews,
  scrapNews,
} from '../../../../store/news';
import '../../../common/common.scss';
import {NewsTypes, ScrapNewsTypes} from '../../../common/types/NewsType';
import {SCRAP_KEY} from './../../../../Config';
import {useSelector} from 'react-redux';

interface ArticlesProp {
  news: NewsTypes[];
}

const Articles: React.FC<ArticlesProp> = ({news}) => {
  const [scraps, setScraps] = useState<ScrapNewsTypes[]>(() => {
    const data = localStorage.getItem(SCRAP_KEY);
    if (data !== null) return JSON.parse(data);
    else return [];
  });
  const dispatch = useAppDispatch();
  const scrapSelector = useSelector(scrapNews);

  useEffect(() => {
    dispatch(uploadScrapNews(scraps));
  }, []);

  useEffect(() => {
    localStorage.setItem(SCRAP_KEY, JSON.stringify(scrapSelector));
  }, [scrapSelector]);

  const addScrap = (url: string, title: string) => {
    const newsData = {
      url,
      title,
    };
    dispatch(addScrapNews(newsData));
    setScraps([...scraps, newsData]);
  };

  const removeScrap = (url: string) => {
    dispatch(removeScrapNews(url));
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
              {scrapSelector &&
              scrapSelector.map((data) => data.url).includes(news.url) ? (
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
