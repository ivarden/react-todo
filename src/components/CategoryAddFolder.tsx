import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import "./CategoryAddFolder.scss";

const colors = [1, 2, 3, 4, 5, 6, 7, 8];

const CheckBox: React.FC<{
  name: string;
  value: string;
  color: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}> = ({ name, value, color, onChange }) => (
  <label className="category__add-folder_container">
    <input
      type="checkbox"
      checked={color === `${value}` ? true : false}
      name={name}
      value={value}
      onChange={onChange}
    />
    <span className={`category__add-folder_color-item ${value}`} />
    <span className="color-item__checkmark"></span>
  </label>
);

const CategoryAddFolder: React.FC<{
  setAddFolder: (value: boolean) => void;
}> = ({ setAddFolder }) => {
  const [color, setColor] = React.useState("color-item1");
  const [title, setTitle] = React.useState("");

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.target as HTMLInputElement;
    name === "title" ? setTitle(value) : setColor(value);
  };

  const submitHandler = (e: React.FormEvent<HTMLElement>): void => {
    e.preventDefault();
    const newFolder = { title, color };
    setColor("color-item1");
    setTitle("");
    console.log(newFolder);
  };

  return (
    <div className="category__add-folder">
      <div className="category__add-folder_wrap">
        <div className="category__add-folder_wrap-inside">
          <form onSubmit={submitHandler}>
            <input
              placeholder="folder title"
              name="title"
              value={title}
              onChange={onChangeHandler}
              required
            />
            <div className="category__add-folder_color-wrap">
              {colors.map((i) => (
                <CheckBox
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
              className="category__add-folder_close"
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

export default CategoryAddFolder;
