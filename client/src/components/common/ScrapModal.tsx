import React, {useEffect, useState} from 'react';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import {ScrapNewsTypes} from './types/NewsType';
import {BsBookmarkFill} from 'react-icons/bs';
import {SCRAP_KEY} from './../../Config';

interface ScrapModalProps {
  isClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const ScrapModal: React.FC<ScrapModalProps> = ({isClicked, setIsClicked}) => {
  const [scraps, setScraps] = useState<ScrapNewsTypes[]>(() => {
    const data = localStorage.getItem(SCRAP_KEY);
    if (data !== null) return JSON.parse(data);
    else return [];
  });

  useEffect(() => {
    localStorage.setItem(SCRAP_KEY, JSON.stringify(scraps));
  }, [scraps]);

  const modalCloseHandler = () => {
    setIsClicked(!isClicked);
  };

  const removeScrap = (url: string) =>
    setScraps(scraps.filter((data) => data.url !== url));

  return (
    <div className="modal_container">
      <div className="modal_scrap">
        <div className="modal_head">
          <h2>스크랩 뉴스</h2>
          <AiOutlineCloseCircle
            className="modal_close_icon"
            onClick={modalCloseHandler}
          />
        </div>
        <ul>
          {scraps.length ? (
            scraps.map((news) => (
              <li key={news.url}>
                <div className="scrap_item">
                  <a href={news.url} target="_blank">
                    {news.title}
                  </a>
                  <BsBookmarkFill
                    className="article_scrap"
                    onClick={() => removeScrap(news.url)}
                  />
                </div>
              </li>
            ))
          ) : (
            <span>스크랩한 뉴스가 없습니다.</span>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ScrapModal;
