import React, {useEffect} from 'react';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import {BsBookmarkFill} from 'react-icons/bs';
import {useSelector} from 'react-redux';
import {useAppDispatch} from '../../store';
import {scrapNews, removeScrapNews} from '../../store/news';

interface ScrapModalProps {
  isClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const ScrapModal: React.FC<ScrapModalProps> = ({isClicked, setIsClicked}) => {
  const dispatch = useAppDispatch();
  const scraps = useSelector(scrapNews);

  const modalCloseHandler = () => {
    setIsClicked(!isClicked);
  };

  const removeScrap = (_id: string) => dispatch(removeScrapNews(_id));

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
              <li key={news._id}>
                <div className="scrap_item">
                  <div className="article_title">
                    <a href={news.link} target="_blank">
                      {news.title}
                    </a>
                  </div>
                  <BsBookmarkFill
                    className="article_scrap"
                    onClick={() => removeScrap(news._id)}
                  />
                </div>
              </li>
            ))
          ) : (
            <span>스크랩한 뉴스가 존재하지 않습니다.</span>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ScrapModal;
