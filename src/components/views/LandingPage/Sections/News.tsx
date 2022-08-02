import React, {useState, useEffect} from 'react';
import ArticleList from './ArticleList';
import Category from '../../../common/Category';
import {API_URL, API_KEY} from '../../../../Config';
import '../../../common/news.scss';
import {NewsTypes} from '../../../common/types/NewsType';
import axios from 'axios';

const News: React.FC = () => {
  const [category, setCategory] = useState([
    {category: 'news', name: '최신뉴스', isClicked: true},
    {category: 'business', name: '비즈니스', isClicked: false},
    {category: 'entertainment', name: '엔터테인먼트', isClicked: false},
    {category: 'politics', name: '정치', isClicked: false},
    {category: 'economics', name: '경제', isClicked: false},
    {category: 'science', name: '과학', isClicked: false},
    {category: 'sport', name: '스포츠', isClicked: false},
    {category: 'tech', name: '기술', isClicked: false},
  ]);
  const [curCategoryIdx, setCurCategoryIdx] = useState(0);
  const [news, setNews] = useState<NewsTypes[]>([]);
  const options = {
    method: 'GET',
    url: `${API_URL}latest_headlines`,
    params: {
      countries: 'KR',
      lang: 'ko',
      topic: category[curCategoryIdx].category,
      page_size: 100,
    },
    headers: {
      'x-api-key': API_KEY,
    },
  };

  useEffect(() => {
    fetchNews(options);
  }, []);

  useEffect(() => {
    fetchNews(options);
  }, [category]);

  // const fetchNews = async (options: object) => {
  //   try {
  //     const response = await axios.request(options);
  //     setNews([...response.data.articles]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const fetchNews = (options: object) => {
    axios
      .request(options)
      .then((response) => setNews([...response.data.articles]));
  };

  return (
    <div className="news">
      <Category
        category={category}
        setCategory={setCategory}
        setCurCategoryIdx={setCurCategoryIdx}
      />
      <ArticleList curCategory={category[curCategoryIdx].name} news={news} />
    </div>
  );
};

export default News;
