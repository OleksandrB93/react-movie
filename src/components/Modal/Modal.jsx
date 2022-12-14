import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalEm } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ children, closeModal }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeModal]);

  const handleBackdrop = (event) => {
    if (event.target === event.currentTarget) closeModal();
  };

  return createPortal(
    <Overlay onClick={handleBackdrop}>
      <ModalEm>{children}</ModalEm>
    </Overlay>,
    modalRoot
  );
}