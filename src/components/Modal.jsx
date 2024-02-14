import React from "react";

function Modal({ children, title }) {
  return (
    <>
      {/* ปุ่ม open modal */}
      <button
        className="btn bg-white border-2 border-amber-500 hover:bg-amber-500 hover:text-white outline-none"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        {title}
      </button>
      {/* form */}
      <dialog id="my_modal_2" className="modal">
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
