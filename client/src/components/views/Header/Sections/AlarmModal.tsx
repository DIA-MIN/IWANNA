import React from 'react';

interface AlarmModalProps {
  tempData: {
    id: string;
    title: string;
  }[];
  isModal: boolean;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AlarmModal: React.FC<AlarmModalProps> = ({
  tempData,
  isModal,
  setIsModal,
}) => {
  return (
    <div className="modal_alarm_container" onClick={() => setIsModal(!isModal)}>
      <div className="modal_alarm">
        <h2>새 소식</h2>
        {tempData.length > 0 ? (
          <ul className="modal_alarm_list">
            {tempData.map((alarm) => (
              <li>
                신청하신 <span>{alarm.title}</span> 뉴스의 후속 뉴스가
                보도되었습니다.
              </li>
            ))}
          </ul>
        ) : (
          <span>새로운 알림이 없습니다.</span>
        )}
      </div>
    </div>
  );
};

export default AlarmModal;
