import { useEffect, useState } from "react";

type ModalState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useModal = (): ModalState => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

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
