import React, {useState} from 'react';
import {AiOutlineInfoCircle, AiOutlineCloseCircle} from 'react-icons/ai';
import PopConfirmModal from './PopConfirmModal';
import './common.scss';

interface UpdateModalProps {
  isClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const UpdateModal: React.FC<UpdateModalProps> = ({isClicked, setIsClicked}) => {
  const [hide, setHide] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);

  const updateModalCloseHandler = () => {
    setIsClicked(!isClicked);
  };

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
            <PopConfirmModal hide={hide} />
          </div>
          <AiOutlineCloseCircle
            className="modal_close_icon"
            onClick={updateModalCloseHandler}
          />
        </div>
        <div className="modal_write_input">
          <input placeholder="URL을 입력해주세요." />
          <button onClick={() => setIsConfirm(!isConfirm)} type="button">
            확인
          </button>
        </div>
        <div className="modal_update_button">
          <button
            className={
              isConfirm ? 'button_modal_write clamp' : 'button_modal_write'
            }
          >
            수정
          </button>
          <button className={'button_modal_delete'}>삭제</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateModal;
