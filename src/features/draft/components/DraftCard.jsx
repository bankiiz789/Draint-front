import React from "react";
import DraftItem from "./DraftItem";
import useDraft from "../hooks/useDraft";
import { Link } from "react-router-dom";

function DraftCard() {
  const { draft } = useDraft();
  return (
    <div>
      {draft.map((el) => (
        <Link key={el.id} to={`/draft/${el.id}`}>
          <li className="m-4">
            <DraftItem draft={el} />
          </li>
        </Link>
      ))}
    </div>
  );
}

export default DraftCard;
