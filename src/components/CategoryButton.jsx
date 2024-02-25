import React, { useState } from "react";

function CategoryButton({ children, category }) {
  let className = "";

  switch (category) {
    case "EXPERIENCE":
      className =
        "border-2 p-2 rounded-full text-[10px] font-bold border-[#9EC1CF] text-[#9EC1CF]";
      break;
    case "DRAMA":
      className =
        "border-2 p-2 rounded-full text-[10px] font-bold border-[#bcaabb] text-[#CC99C9]";
      break;
    case "INSPIRE":
      className =
        "border-2 p-2 rounded-full text-[10px] font-bold border-[#72AE72] text-[#72AE72]";
      break;
    case "ROMANTIC":
      className =
        "border-2 p-2 rounded-full text-[10px] font-bold border-[#FF6663] text-[#FF6663]";
      break;
    case "KNOWLEDGE":
      className =
        "border-2 p-2 rounded-full text-[10px] font-bold border-[#FEB144] text-[#FEB144]";
      break;
    case "GENERAL":
      className =
        "border-2 p-2 rounded-full text-[10px] font-bold border-[#64748B] text-[#64748B]";
      break;
    case "HORROR":
      className =
        "border-2 p-2 rounded-full text-[10px] font-bold border-[#82387E] text-[#82387E]";
      break;
    default:
      className =
        "border-2 p-2 rounded-full text-[10px] font-bold border-[#9EC1CF] text-[#9EC1CF]";
  }

  return <div className={className}>{children}</div>;
}

export default CategoryButton;
