import React, {useState} from 'react';
import {useParams} from 'react-router';
import './MyPage.scss';
import Category from './../../common/Category';
import MyPageContents from './Sections/MyPageContents';

const MyPage = () => {
  const {type} = useParams();
  const [userCategory, setUserCategory] = useState([
    {id: 'icm_u_0', name: '구독한 기사', isClicked: true},
    {id: 'icm_u_1', name: '기록', isClicked: false},
  ]);
  const [reporterCategory, setReporterCategory] = useState([
    {id: 'icm_r_0', name: 'My 후속 기사', isClicked: true},
    {id: 'icm_r_1', name: '후속기사 추가', isClicked: false},
  ]);
  const [curCategoryIdx, setCurCategoryIdx] = useState(0);

  return (
    <div className="mypage">
      <Category
        category={type === 'user' ? userCategory : reporterCategory}
        setCategory={type === 'user' ? setUserCategory : setReporterCategory}
        setCurCategoryIdx={setCurCategoryIdx}
      />
      <MyPageContents
        curCategory={
          type === 'user'
            ? userCategory[curCategoryIdx].name
            : reporterCategory[curCategoryIdx].name
        }
      />
    </div>
  );
};

export default MyPage;
