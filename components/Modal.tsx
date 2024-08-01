"use client";
import useModal from "@/hooks/useModal";
import { motion, AnimatePresence } from "framer-motion";
import { usePreventScroll } from "react-aria";

function Modal() {
  const { isOpen } = useModal();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0">
          <div className="absolute inset-0 bg-black/50">
            <ModalBody />
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

function ModalBody() {
  const { modalContent } = useModal();
  usePreventScroll();

  return (
    <motion.div
      animate={{ opacity: 1, top: "10%" }}
      initial={{ opacity: 0, top: "100%" }}
      exit={{ opacity: 0, top: "100%" }}
      transition={{
        duration: 0.125,
        type: "spring",
        damping: 18,
        stiffness: 200,
      }}
      className="relative -right-1/2 top-full flex w-full -translate-x-1/2 flex-col rounded-t-xl bg-white px-300 py-500 shadow-lg md:rounded-xl md:py-500 lg:max-w-[592px]"
    >
      <div>{modalContent}</div>
    </motion.div>
  );
}
export default Modal;
