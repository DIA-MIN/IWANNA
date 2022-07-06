import './common.scss';

interface PopConfirmModalProps {
  hide: boolean;
  userType?: string;
}

const PopConfirmModal: React.FC<PopConfirmModalProps> = ({hide, userType}) => {
  const writeArticleInfo: string =
    '후속 기사 URL을 꼭! 확인해야 작성 가능합니다.';
  return (
    <div>
      <span className={hide ? 'pop_confirm clamp' : 'pop_confirm'}>
        {writeArticleInfo}
      </span>
    </div>
  );
};

export default PopConfirmModal;
