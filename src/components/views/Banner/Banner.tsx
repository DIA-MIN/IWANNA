import {useState, useEffect} from 'react';
import './Banner.scss';
import {HiSearch} from 'react-icons/hi';
import {NewsTypes} from '../../common/types/NewsType';
import {API_KEY, API_URL} from '../../../Config';
import {useNavigate} from 'react-router';
import axios from 'axios';

const Banner = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState<NewsTypes[]>([]);
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
  const options = {
    method: 'GET',
    url: `${API_URL}latest_headlines`,
    params: {
      countries: 'KR',
      lang: 'ko',
      topic: 'news',
      page_size: 10,
    },
    headers: {
      'x-api-key': API_KEY,
    },
  };
  const fetchNews = async (options: object) => {
    try {
      const response = await axios.request(options);
      setNews([...response.data.articles]);
    } catch (error) {
      console.log(error);
    }
  };

  const keywordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const clickHandler = () => {
    navigate(`/search/${keyword}`);
    setKeyword('');
  };

  // const handleEnterPress = (e: React.KeyboardEvent) => {
  //   if (e.key === 'Enter') {
  //     clickHandler();
  //   }
  // };

  useEffect(() => {
    fetchNews(options);
  }, []);

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
