import {useState, useEffect} from 'react';
import './Banner.scss';
import {HiSearch} from 'react-icons/hi';
import {useNavigate} from 'react-router';
import {useSelector} from 'react-redux';
import {recentNews} from './../../../store/news';

const Banner = () => {
  const news = useSelector(recentNews);
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');
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
  const keywordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const clickHandler = () => {
    navigate(`/search/${keyword}`);
    setKeyword('');
  };

  useEffect(() => {
    newsTicker(5000);
  }, []);

  return (
    <div className="banner">
      <h1>모든 뉴스의 소식이 궁금하다면?</h1>
      <form className="search_main">
        <input
          placeholder="원하시는 뉴스의 키워드를 검색해주세요."
          value={keyword}
          onChange={keywordHandler}
        />
        <HiSearch className="search_main_icon" onClick={clickHandler} />
      </form>
      <div className="rolling">
        <ul className="rolling__list">
          {news &&
            news.map((news) => (
              <li key={news._id}>
                <a href={news.link} target="_blank">
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
