import React from "react";
import { FaList } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import "./CategoryButtons.scss";

const CategoryButtons: React.FC<{
  setAddFolder: (value: boolean) => void;
}> = ({ setAddFolder }) => {
  return (
    <div className="category__buttons">
      <div className="category__buttons-all">
        <FaList className="category__buttons-all_icon" />
        <span className="category__buttons-all_text">ALL</span>
      </div>
      <div className="category__buttons-add" onClick={() => setAddFolder(true)}>
        <FaPlus className="category__buttons-all_icon" />
        <span className="category__buttons-all_text">NEW</span>
      </div>
    </div>
  );
};
export default CategoryButtons;
