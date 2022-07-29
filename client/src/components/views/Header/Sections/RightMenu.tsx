import React, {useState} from 'react';
import '../Header.scss';
import {BsBookmarkCheck} from 'react-icons/bs';
import ScrapModal from '../../../common/ScrapModal';

const RightMenu: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="right_menu">
      <ul className="right_menu_item">
        <li onClick={() => setIsClicked(!isClicked)}>
          <BsBookmarkCheck className="icon_scrap" />
          스크랩
        </li>
      </ul>
      {isClicked && (
        <ScrapModal isClicked={isClicked} setIsClicked={setIsClicked} />
      )}
    </div>
  );
};

export default RightMenu;
