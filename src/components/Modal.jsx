import React from "react";

function Modal({ children }) {
  return (
    <div>
      <dialog className="modal" open>
        {children}
      </dialog>
    </div>
  );
}

export default Modal;
