import React, {useState} from 'react';
import {AiOutlineInfoCircle, AiOutlineCloseCircle} from 'react-icons/ai';
import PopConfirm from './PopConfirm';

interface WriteModalProps {
  isClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const WriteModal: React.FC<WriteModalProps> = ({isClicked, setIsClicked}) => {
  const [hide, setHide] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);

  const writeModalCloseHandler = () => {
    setIsClicked(!isClicked);
  };

  const WriteModalSubmitHandler = () => {};

  return (
    <div className="modal_container">
      <form className="modal_write">
        <div className="modal_write_head">
          <div>
            <span>후속 기사 작성</span>
            <AiOutlineInfoCircle
              className="article_list_guide"
              onMouseOver={() => setHide(true)}
              onMouseOut={() => setHide(false)}
            />
            <PopConfirm
              hide={hide}
              message={'후속 기사 URL을 확인해야 작성 가능합니다.'}
            />
          </div>
          <AiOutlineCloseCircle
            className="modal_close_icon"
            onClick={writeModalCloseHandler}
          />
        </div>
        <div className="modal_write_input">
          <input placeholder="URL을 입력해주세요." />
          <button onClick={() => setIsConfirm(!isConfirm)} type="button">
            확인
          </button>
        </div>
        <button
          className={
            isConfirm ? 'button_modal_write clamp' : 'button_modal_write'
          }
        >
          작성하기
        </button>
      </form>
    </div>
  );
};

export default WriteModal;
