import React, {useState, useEffect} from 'react';
import '../../../common/news.scss';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import PopConfirm from '../../../common/PopConfirm';
import Articles from './Articles';
import {NewsTypes} from '../../../common/types/NewsType';
import Paging from '../../../common/Paging';

interface ArticleListProps {
  curCategory: string;
  news: NewsTypes[];
}

const ArticleList: React.FC<ArticleListProps> = ({curCategory, news}) => {
  const [hide, setHide] = useState(false);
  const [count, setCount] = useState(0);
  const [curPage, setCurPage] = useState(1);
  const [postPerPage] = useState(5);
  const [indexOfLastPost, setIndexOfLastPost] = useState(0);
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0);
  const [curPosts, setCurPosts] = useState<NewsTypes[]>([]);

  useEffect(() => {
    setCount(news.length);
    setIndexOfLastPost(curPage * postPerPage);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
    setCurPosts(news.slice(indexOfFirstPost, indexOfLastPost));
  }, [curPage, indexOfLastPost, indexOfFirstPost, news, postPerPage]);

  const setPage = (e: number) => {
    setCurPage(e);
  };

  return (
    <div className="article_list">
      <div className="category_title">
        <div className="category_name">{curCategory}</div>
        <AiOutlineInfoCircle
          className="article_list_guide"
          onMouseOver={() => setHide(true)}
          onMouseOut={() => setHide(false)}
        />
        <PopConfirm
          hide={hide}
          message={`스크랩 아이콘을 눌러 관심있는 뉴스를 '추가'해보세요.`}
        />
      </div>
      <Articles news={curPosts} />
      <Paging page={curPage} count={count} setPage={setPage} />
    </div>
  );
};

export default ArticleList;
