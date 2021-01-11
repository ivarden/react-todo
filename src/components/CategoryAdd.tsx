import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import "./CategoryAdd.scss";
import CheckBoxColorCircle from "./CheckBoxColorCircle";

const CategoryAdd = ({
  colors,
  color,
  title,
  onChangeHandler,
  submitHandler,
  setAddFolder,
}: ICategoryAdd) => {
  return (
    <div className="category-add">
      <div className="category-add_wrap">
        <div className="category-add_wrap-inside">
          <form onSubmit={submitHandler}>
            <input
              placeholder="folder title"
              name="title"
              value={title}
              onChange={onChangeHandler}
              required
            />
            <div className="category-add_color-wrap">
              {colors.map((i) => (
                <CheckBoxColorCircle
                  name="color"
                  value={`color-item${i}`}
                  color={color}
                  onChange={onChangeHandler}
                  key={`color-item${i}`}
                />
              ))}
            </div>
            <button type="submit">Add new folder</button>
            <span
              className="category-add_close"
              onClick={() => setAddFolder(false)}
            >
              <FaTimesCircle />
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CategoryAdd;
