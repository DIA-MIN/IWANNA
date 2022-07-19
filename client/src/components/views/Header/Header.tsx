import {useNavigate} from 'react-router';
import './Header.scss';
import RightMenu from './Sections/RightMenu';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="logo" onClick={() => navigate('/')}>
        IWANNA
      </div>
      <RightMenu />
    </div>
  );
};

export default Header;
