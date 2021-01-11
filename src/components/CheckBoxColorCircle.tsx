import React from "react";

const CheckBoxColorCircle: React.FC<{
  name: string;
  value: string;
  color: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}> = ({ name, value, color, onChange }) => (
  <label className="category-add_container">
    <input
      type="checkbox"
      checked={color === `${value}` ? true : false}
      name={name}
      value={value}
      onChange={onChange}
    />
    <span className={`category-add_color-item ${value}`} />
    <span className="color-item__checkmark"></span>
  </label>
);

export default CheckBoxColorCircle;
