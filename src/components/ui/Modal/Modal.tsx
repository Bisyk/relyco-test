import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const handleCloseClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = isOpen ? (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-4">
        <p className="flex justify-end">
          <button onClick={handleCloseClick} className="font-bold">
            X
          </button>
        </p>
        {children}
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return createPortal(modalContent, document.getElementById("modal-root")!);
  } else {
    return null;
  }
};

export default Modal;
