import React from "react";
import { FaCircle } from "react-icons/fa";
import "./CategoryFolder.scss";

const CategoryFolder: React.FC<{
  text: string;
  color?: string;
}> = ({ text, color }) => {
  return (
    <div className="category__folder">
      <i className="category__folder-icon">
        <FaCircle style={{ color }} />
      </i>
      <span className="category__folder-text">{text}</span>
    </div>
  );
};
export default CategoryFolder;
