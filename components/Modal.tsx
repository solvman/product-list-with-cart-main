"use client";
import useModal from "@/hooks/useModal";
import { motion } from "framer-motion";

function Modal() {
  const { modalContent, isOpen } = useModal();

  return (
    isOpen && (
      <div className="absolute inset-0 bg-black/50">
        <div className="fixed h-screen w-screen overflow-y-auto">
          {/* Modal */}
          <motion.div
            animate={{ opacity: 1, top: "10%" }}
            initial={{ opacity: 0, top: "100%" }}
            exit={{ opacity: 0 }}
            transition={{
              delay: 0.1,
              duration: 1,
              type: "spring",
              damping: 25,
              stiffness: 300,
            }}
            className="relative -right-1/2 top-full flex w-full -translate-x-1/2 flex-col rounded-t-xl bg-white px-300 py-500 shadow-lg md:rounded-xl md:py-500 lg:max-w-[592px]"
          >
            <div>{modalContent}</div>
          </motion.div>
        </div>
      </div>
    )
  );
}
export default Modal;
