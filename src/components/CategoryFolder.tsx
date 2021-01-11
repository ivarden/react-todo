import React from "react";
import "./CategoryFolder.scss";

const CategoryFolder: React.FC<{
  text: string;
  color?: string;
}> = ({ text, color }) => {
  return (
    <div className="category__folder">
      <i
        className={`category__folder-icon category__folder-icon_circle  ${color}`}
      />
      <span className="category__folder-text">{text}</span>
    </div>
  );
};
export default CategoryFolder;
