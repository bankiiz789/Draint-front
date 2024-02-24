import React from "react";

function DraftItem({ draft }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{draft.title}</h2>
      </div>
    </div>
  );
}

export default DraftItem;
