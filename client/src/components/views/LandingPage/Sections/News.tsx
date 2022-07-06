import React, {useState} from 'react';
import ArticleList from './ArticleList';
import Category from '../../../common/Category';
import '../../../common/news.scss';

interface NewsProps {
  userType: string;
  isLogin: boolean;
}

const News: React.FC<NewsProps> = ({userType, isLogin}) => {
  const [userCategory, setUserCategory] = useState([
    {id: 'ic_u_0', name: '최신 뉴스', isClicked: true},
    {id: 'ic_u_1', name: '인기 뉴스', isClicked: false},
    {id: 'ic_u_2', name: '정치', isClicked: false},
    {id: 'ic_u_3', name: '경제', isClicked: false},
    {id: 'ic_u_4', name: '사회', isClicked: false},
    {id: 'ic_u_5', name: '스포츠', isClicked: false},
    {id: 'ic_u_6', name: '날씨', isClicked: false},
  ]);
  const [reporterCategory, setReporterCategory] = useState([
    {id: 'ic_r_0', name: '최신 뉴스', isClicked: true},
    {id: 'ic_r_1', name: '후속 기사 신청순', isClicked: false},
    {id: 'ic_r_2', name: '정치', isClicked: false},
    {id: 'ic_r_3', name: '경제', isClicked: false},
    {id: 'ic_r_4', name: '사회', isClicked: false},
    {id: 'ic_r_5', name: '스포츠', isClicked: false},
    {id: 'ic_r_6', name: '날씨', isClicked: false},
  ]);
  // const [curCategory, setCurCategory] = useState(userCategory[0].name);
  const [curCategoryIdx, setCurCategoryIdx] = useState(0);

  return (
    <div className="news">
      <Category
        category={userType === 'user' ? userCategory : reporterCategory}
        setCategory={
          userType === 'user' ? setUserCategory : setReporterCategory
        }
        setCurCategoryIdx={setCurCategoryIdx}
      />
      <ArticleList
        curCategory={
          userType === 'user'
            ? userCategory[curCategoryIdx].name
            : reporterCategory[curCategoryIdx].name
        }
        userType={userType}
        isLogin={isLogin} // 임시 props drilling
      />
    </div>
  );
};

export default News;
