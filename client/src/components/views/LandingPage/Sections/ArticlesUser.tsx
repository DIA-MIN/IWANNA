import React, {useState} from 'react';
import '../../../common/common.scss';
import {article_temp_data} from '../../../temp-data/data';

interface ArticlesProps {
  isLogin: boolean;
}

const ArticlesUser: React.FC<ArticlesProps> = ({isLogin}) => {
  return (
    <ul className="articles">
      {article_temp_data.map((article) => (
        <li>
          <div
            className={
              article.parentArticle || article.childArticle
                ? 'article_main clamp'
                : 'article_main'
            }
          >
            <span>{article.title}</span>
            {isLogin ? (
              <button
                className={
                  article.isFollow
                    ? 'button_article_follow'
                    : 'button_article_follow clamp'
                }
              >
                신청
              </button>
            ) : null}
          </div>
          {(article.parentArticle || article.childArticle.length > 0) && (
            <div className="article_sub">
              {article.parentArticle && (
                <div>
                  <span>해당 기사의 선행 뉴스입니다.</span>
                  <span>{article.parentArticle}</span>
                </div>
              )}
              {article.childArticle.length > 0 && (
                <div>
                  <span>해당 기사의 후속 뉴스입니다.</span>
                  <span>
                    {article.childArticle[0].title}{' '}
                    <b>외 {article.childArticle.length}건</b>
                  </span>
                  <button>더보기</button>
                </div>
              )}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ArticlesUser;
