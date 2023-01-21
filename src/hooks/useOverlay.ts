import { useState } from 'react';

export type TModalTypes = 'SIDE_MODAL' | 'COMMON_MODAL' | 'CONFIRM_MODAL';

const useOverlay = () => {
  const [isSideModalOpen, setIsSideModalOpen] = useState(false);
  const [isCommonModalOpen, setIsCommonModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const setOpenOverlay = (modalType: TModalTypes, identifier: string = '') => {
    console.log(identifier);

    switch (modalType) {
      case 'SIDE_MODAL':
        setIsSideModalOpen(true);
        break;
      case 'COMMON_MODAL':
        setIsCommonModalOpen(true);
        break;
      case 'CONFIRM_MODAL':
        setIsConfirmModalOpen(true);
        break;
      default:
        break;
    }
  };

  return {
    isSideModalOpen,
    isCommonModalOpen,
    isConfirmModalOpen,
    setOpenOverlay,
  };
};

export default useOverlay;
