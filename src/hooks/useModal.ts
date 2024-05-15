import { useState } from "react";

type ModalState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useModal = (): ModalState => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    onOpen: handleOpen,
    onClose: handleClose,
  };
};
