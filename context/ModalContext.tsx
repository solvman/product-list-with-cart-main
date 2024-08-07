import { useState, createContext, useEffect } from "react";
import { usePreventScroll } from "react-aria";

function useModalContext() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(
    null,
  );

  const openModal = (content: React.ReactNode) => {
    setIsOpen(true);
    setModalContent(content);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent(null);
  };

  return {
    isOpen,
    modalContent,
    openModal,
    closeModal,
  };
}

export type ModalContextType = ReturnType<typeof useModalContext>;
const initModalContext: ModalContextType = {
  isOpen: false,
  modalContent: null,
  openModal: () => {},
  closeModal: () => {},
};

const ModalContext = createContext<ModalContextType>(initModalContext);
type ModalProviderProps = {
  children: React.ReactNode;
};

export function ModalContextProvider({ children }: ModalProviderProps) {
  return (
    <ModalContext.Provider value={useModalContext()}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalContext;
