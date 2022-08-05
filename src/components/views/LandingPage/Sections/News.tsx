import React, {useState, useEffect} from 'react';
import ArticleList from './ArticleList';
import Category from '../../../common/Category';
import {API_URL, API_KEY} from '../../../../Config';
import '../../../common/news.scss';
import {NewsTypes} from '../../../common/types/NewsType';
import axios from 'axios';
import {useAppDispatch} from '../../../../store';
import {addRecentNews} from '../../../../store/news';

const News: React.FC = () => {
  const dispatch = useAppDispatch();
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
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const options = {
    method: 'GET',
    url: `${API_URL}latest_headlines`,
    params: {
      countries: 'KR',
      lang: 'ko',
      topic: category[curCategoryIdx].category,
      page_size: 50,
    },
    headers: {
      'x-api-key': API_KEY,
    },
  };

  useEffect(() => {
    fetchNews(options);
    setLoading(true);
  }, [category]);

  const fetchNews = async (options: object) => {
    try {
      const response = await axios.request(options);
      if (isLoading)
        dispatch(addRecentNews(response.data.articles.slice(0, 10)));
      setNews([...response.data.articles]);
      setIsLoading(false);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="news">
      <Category
        category={category}
        setCategory={setCategory}
        setCurCategoryIdx={setCurCategoryIdx}
      />
      <ArticleList
        curCategory={category[curCategoryIdx].name}
        news={news}
        loading={loading}
      />
    </div>
  );
};

export default News;
