import React, {useEffect, useState} from 'react';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import {useParams} from 'react-router';
import {API_KEY, API_URL} from '../../../Config';
import Paging from '../../common/Paging';
import PopConfirm from '../../common/PopConfirm';
import {NewsTypes} from '../../common/types/NewsType';
import Articles from '../LandingPage/Sections/Articles';
import './SearchPage.scss';

const date = new Date();
const year = date.getFullYear();
const month = ('0' + date.getMonth()).slice(-2);
const day = ('0' + (date.getDate() - 1)).slice(-2);
const inputDate = year + '-' + month + '-' + day;

const SearchPage = () => {
  const {keyword} = useParams();
  const [news, setNews] = useState<NewsTypes[]>([]);
  const [hide, setHide] = useState(false);
  const [count, setCount] = useState(0);
  const [curPage, setCurPage] = useState(1);
  const [postPerPage] = useState(10);
  const [indexOfLastPost, setIndexOfLastPost] = useState(0);
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0);
  const [curPosts, setCurPosts] = useState<NewsTypes[]>([]);
  const setPage = (page: number) => setCurPage(page);

  const fetchNews = async (endpoint: string) => {
    const json = await (await fetch(endpoint)).json();
    setNews([...json.articles]);
  };

  useEffect(() => {
    const endpoint = `${API_URL}everything?q=${keyword}&from=${inputDate}&sortBy=popularity&apiKey=${API_KEY}`;
    console.log(endpoint);
    fetchNews(endpoint);
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
        <Articles news={curPosts} />
        <Paging page={curPage} count={count} setPage={setPage} />
      </div>
    </div>
  );
};

export default SearchPage;
