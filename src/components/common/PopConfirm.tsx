import './common.scss';

interface PopConfirmProps {
  hide: boolean;
  message: string;
}

const PopConfirm: React.FC<PopConfirmProps> = ({hide, message}) => {
  return (
    <div>
      <span className={hide ? 'pop_confirm clamp' : 'pop_confirm'}>
        {message}
      </span>
    </div>
  );
};

export default PopConfirm;
