import ModalContext, { ModalContextType } from "@/context/ModalContext";
import { useContext } from "react";

function useModal(): ModalContextType {
  return useContext(ModalContext);
}

export default useModal;
