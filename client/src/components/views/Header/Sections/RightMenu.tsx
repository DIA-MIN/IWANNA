import React, {useState} from 'react';
import {useNavigate} from 'react-router';
import '../Header.scss';
import {BsFillBellFill} from 'react-icons/bs';
import AlarmModal from './AlarmModal';

interface RightMenuProps {
  isLogin: boolean;
  isUser: boolean;
}

// const temp_data: {id: string; title: string}[] = [];
const temp_data: {id: string; title: string}[] = [
  {
    id: 'a_1',
    title: '[인천] 인천여성경제인협회, 산불 이재민에 천백만 원 성금1',
  },
  {
    id: 'a_2',
    title: '[인천] 인천여성경제인협회, 산불 이재민에 천백만 원 성금2',
  },
  {
    id: 'a_3',
    title: '[인천] 인천여성경제인협회, 산불 이재민에 천백만 원 성금3',
  },
  {
    id: 'a_4',
    title: '[인천] 인천여성경제인협회, 산불 이재민에 천백만 원 성금4',
  },
];

const RightMenu: React.FC<RightMenuProps> = ({isLogin, isUser}) => {
  const navigate = useNavigate();
  const [isModal, setIsModal] = useState(false);
  const name = '박민석';

  if (!isLogin) {
    return (
      <div className="right_menu">
        <ul className="right_menu_item">
          <li onClick={() => navigate('/login')}>로그인</li>
          <li onClick={() => navigate('/choice')}>회원가입</li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="right_menu">
        <ul className="right_menu_item">
          <li onClick={() => setIsModal(!isModal)}>
            {temp_data.length > 0 && <div className="heaer_icon_spot"></div>}
            <BsFillBellFill className="header_icon" />
          </li>
          {isUser ? (
            <li className="header_user">{name}님</li>
          ) : (
            <li className="header_user">{name}기자님</li>
          )}
          <li onClick={() => navigate('/mypage/user')}>마이페이지</li>
        </ul>
        {isModal && (
          <AlarmModal
            tempData={temp_data}
            isModal={isModal}
            setIsModal={setIsModal}
          />
        )}
      </div>
    );
  }
};

export default RightMenu;
