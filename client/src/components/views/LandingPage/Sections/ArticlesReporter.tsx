import React, {useState} from 'react';
import WriteModal from '../../../common/WriteModal';
import {article_reporter_data} from '../../../temp-data/data';

const ArticlesReporter = () => {
  const [isClicked, setIsClicked] = useState(false);
  const clickModalHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    writeCheck: boolean
  ) => {
    if (!writeCheck) {
      setIsClicked(!isClicked);
    }
  };

  return (
    <div>
      <ul className="articles">
        {article_reporter_data.map((article) => (
          <li>
            <div className={'article_main'}>
              <span>{article.title}</span>
              <button
                className={
                  article.isWrite
                    ? 'button_article_follow'
                    : 'button_article_follow clamp'
                }
                onClick={(e) => clickModalHandler(e, article.isWrite)}
              >
                작성
              </button>
              <div className={'article_follows'}>
                {article.follow_num
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </div>
            </div>
          </li>
        ))}
      </ul>
      {isClicked && (
        <WriteModal isClicked={isClicked} setIsClicked={setIsClicked} />
      )}
    </div>
  );
};

export default ArticlesReporter;
