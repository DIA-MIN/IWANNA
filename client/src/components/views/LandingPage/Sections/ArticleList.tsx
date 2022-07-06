import React, {useState, useEffect} from 'react';
import '../../../common/news.scss';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import PopConfirm from '../../../common/PopConfirm';
import ArticlesUser from './ArticlesUser';
import ArticlesReporter from './ArticlesReporter';

interface ArticleListProps {
  curCategory: string;
  userType: string;
  isLogin: boolean;
}

const ArticleList: React.FC<ArticleListProps> = ({
  curCategory,
  userType,
  isLogin,
}) => {
  const [hide, setHide] = useState(false);

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
          message={
            userType === 'user'
              ? "후속 기사를 원하시면 버튼을 눌러 '신청' 또는 '취소'할 수 있습니다. "
              : "작성한 후속 기사를 등록하고싶으면, '작성' 버튼을 눌러주세요."
          }
        />
      </div>
      {userType === 'user' && <ArticlesUser isLogin={isLogin} />}
      {userType === 'reporter' && <ArticlesReporter />}
    </div>
  );
};

export default ArticleList;
