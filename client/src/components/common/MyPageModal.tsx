import React from 'react';
import {AiOutlineCloseCircle} from 'react-icons/ai';

interface MyPageModalProps {
  message: string;
  isClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const MyPageModal: React.FC<MyPageModalProps> = ({
  message,
  isClicked,
  setIsClicked,
}) => {
  const modalCloseHandler = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="modal_container">
      <div className="modal_mypage_confirm">
        <AiOutlineCloseCircle
          className="modal_close_icon"
          onClick={modalCloseHandler}
        />
        <span>{message}</span>
        <div>
          <button className="button_yes">예</button>
          <button className="button_no" onClick={modalCloseHandler}>
            아니오
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPageModal;
