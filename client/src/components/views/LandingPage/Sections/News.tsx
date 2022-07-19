import React, {useState, useEffect} from 'react';
import ArticleList from './ArticleList';
import Category from '../../../common/Category';
import {API_URL, API_KEY} from '../../../../Config';
import '../../../common/news.scss';

const News: React.FC = () => {
  const [category, setCategory] = useState([
    {category: 'recent', name: '최신뉴스', isClicked: true},
    {category: 'business', name: '비즈니스', isClicked: false},
    {category: 'entertainment', name: '엔터테인먼트', isClicked: false},
    {category: 'health', name: '건강', isClicked: false},
    {category: 'science', name: '과학', isClicked: false},
    {category: 'sports', name: '스포츠', isClicked: false},
    {category: 'technology', name: '기술', isClicked: false},
  ]);
  const [curCategoryIdx, setCurCategoryIdx] = useState(0);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const endpoint = `${API_URL}top-headlines?country=kr&apiKey=${API_KEY}`;
    fetchNews(endpoint);
    console.log(news);
  }, [curCategoryIdx]);

  const fetchNews = async (endpoint: string) => {
    const json = await (await fetch(endpoint)).json();
    setNews(json.articles);
  };

  return (
    <div className="news">
      <Category
        category={category}
        setCategory={setCategory}
        setCurCategoryIdx={setCurCategoryIdx}
      />
      <ArticleList curCategory={category[curCategoryIdx].name} />
    </div>
  );
};

export default News;
