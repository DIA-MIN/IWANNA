import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import {useParams} from 'react-router';
import {API_KEY, API_URL} from '../../../Config';
import Paging from '../../common/Paging';
import PopConfirm from '../../common/PopConfirm';
import {NewsTypes} from '../../common/types/NewsType';
import Articles from '../LandingPage/Sections/Articles';
import './SearchPage.scss';

const SearchPage = () => {
  const {keyword} = useParams();
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState<NewsTypes[]>([]);
  const [hide, setHide] = useState(false);
  const [count, setCount] = useState(0);
  const [curPage, setCurPage] = useState(1);
  const [postPerPage] = useState(10);
  const [indexOfLastPost, setIndexOfLastPost] = useState(0);
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0);
  const [curPosts, setCurPosts] = useState<NewsTypes[]>([]);
  const setPage = (page: number) => setCurPage(page);
  const options = {
    method: 'GET',
    url: `${API_URL}search`,
    params: {
      q: keyword,
      countries: 'KR',
      lang: 'ko',
      page_size: 100,
    },
    headers: {
      'x-api-key': API_KEY,
    },
  };
  const fetchNews = async (options: object) => {
    try {
      const response = await axios.request(options);
      setNews([...response.data.articles]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNews(options);
    setLoading(true);
  }, [keyword]);

  useEffect(() => {
    setCount(news.length);
    setIndexOfLastPost(curPage * postPerPage);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
    setCurPosts(news.slice(indexOfFirstPost, indexOfLastPost));
  }, [curPage, indexOfLastPost, indexOfFirstPost, news, postPerPage]);

  return (
    <div className="search">
      <div className="article_list">
        <PopConfirm
          hide={hide}
          message={`스크랩 아이콘을 눌러 관심있는 뉴스를 '추가'해보세요.`}
        />
        <div className="category_title">
          <div className="category_name">
            '{keyword}'에 대한 검색 결과는 다음과 같습니다. {news.length}건
          </div>
          <AiOutlineInfoCircle
            className="article_list_guide"
            onMouseOver={() => setHide(true)}
            onMouseOut={() => setHide(false)}
          />
        </div>
        <Articles news={curPosts} loading={loading} />
        <Paging page={curPage} count={count} setPage={setPage} />
      </div>
    </div>
  );
};

export default SearchPage;
