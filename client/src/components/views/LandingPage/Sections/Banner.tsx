import React, {useState, useEffect} from 'react';
import '../LandingPage.scss';
import {HiSearch} from 'react-icons/hi';
import {NewsTypes} from '../../../common/types/NewsType';
import {API_KEY, API_URL} from '../../../../Config';
// import {useSelector} from 'react-redux';
// import {recentNews} from '../../../../store/news';

const Banner = () => {
  // const news = useSelector(recentNews);
  const [news, setNews] = useState<NewsTypes[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const newsTicker = (timer: number) => {
    const $rolling = document.querySelector('.rolling__list') as HTMLElement;

    window.setInterval(() => {
      $rolling.style.transitionDuration = '400ms';
      $rolling.style.marginTop = '-50px';

      window.setTimeout(() => {
        $rolling.style.transitionDuration = '';
        $rolling.style.marginTop = '';
        $rolling.appendChild(
          $rolling.querySelector('li:first-child') as HTMLElement
        );
      }, 400);
    }, timer);
  };

  const fetchNews = async (endpoint: string) => {
    const json = await (await fetch(endpoint)).json();
    setNews([...json.articles]);
  };

  useEffect(() => {
    newsTicker(5000);
  }, []);

  useEffect(() => {
    const endpoint = `${API_URL}top-headlines?country=kr&apiKey=${API_KEY}`;
    fetchNews(endpoint);
    setIsLoading(true);
  }, [isLoading]);

  return (
    <div className="banner">
      <h1>모든 뉴스의 소식이 궁금하다면?</h1>
      <form className="search_main">
        <input placeholder="원하시는 뉴스의 키워드를 검색해주세요." />
        <HiSearch className="search_main_icon" />
      </form>
      <div className="rolling">
        <ul className="rolling__list">
          {news &&
            news.map((news) => (
              <li key={news.url}>
                <a href={news.url} target="_blank">
                  {news.title}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Banner;
