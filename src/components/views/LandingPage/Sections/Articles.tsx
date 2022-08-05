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
import Loading from '../../../common/Loading';

interface ArticlesProp {
  news: NewsTypes[];
  loading: boolean;
}

const Articles: React.FC<ArticlesProp> = ({news, loading}) => {
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

  const addScrap = (_id: string, link: string, title: string) => {
    const newsData = {
      _id,
      link,
      title,
    };
    dispatch(addScrapNews(newsData));
    setScraps([...scraps, newsData]);
  };

  const removeScrap = (_id: string) => {
    dispatch(removeScrapNews(_id));
    setScraps(scraps.filter((data) => data._id !== _id));
  };

  return (
    <ul className="articles">
      {loading ? (
        <Loading />
      ) : (
        news.map((news) => (
          <li key={news._id}>
            <div className="article_main">
              <div className="article_title">
                <a href={news.link} target="_blank">
                  {news.title}
                </a>
              </div>
              {scrapSelector &&
              scrapSelector.map((data) => data.link).includes(news.link) ? (
                <BsBookmarkFill
                  className="article_scrap"
                  onClick={() => removeScrap(news._id)}
                />
              ) : (
                <BsBookmark
                  className="article_scrap"
                  onClick={() => addScrap(news._id, news.link, news.title)}
                />
              )}
            </div>
            {news.summary ? (
              <div className="article_sub">{news.summary.slice(0, 150)}...</div>
            ) : null}
          </li>
        ))
      )}
    </ul>
  );
};

export default Articles;
