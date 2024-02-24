import React from "react";

function Modal({ children, title, className, id }) {
  return (
    <>
      {/* ปุ่ม open modal */}
      <button
        className={className}
        onClick={() => document.getElementById(id).showModal()}
      >
        {title}
      </button>
      {/* form */}
      <dialog id={id} className="modal">
        <div className="modal-box  border-2 border-amber-500 m-w-[540px] ">
          {children}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default Modal;
