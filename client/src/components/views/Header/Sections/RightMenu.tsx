import React from 'react';
import '../Header.scss';
import {BsBookmarkCheck} from 'react-icons/bs';

const RightMenu: React.FC = () => {
  return (
    <div className="right_menu">
      <ul className="right_menu_item">
        <li>
          <BsBookmarkCheck className="icon_scrap" />
          스크랩
        </li>
      </ul>
    </div>
  );
};

export default RightMenu;
