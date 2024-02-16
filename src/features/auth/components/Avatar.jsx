import React from "react";

function Avatar({ size }) {
  return (
    <div className="avatar">
      <div className={`${size} rounded-full`}>
        <img
          src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          alt="user"
        />
      </div>
    </div>
  );
}

export default Avatar;
