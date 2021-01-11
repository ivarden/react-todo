import React from "react";
import { createCategory } from "../todoContainer";
import CategoryAdd from "./CategoryAdd";

const CategoryAddContainer: React.FC<{
  setAddFolder: (value: boolean) => void;
}> = ({ setAddFolder }) => {
  const [colors, setColors] = React.useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [color, setColor] = React.useState("color-item1");
  const [title, setTitle] = React.useState("");

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.target as HTMLInputElement;
    name === "title" ? setTitle(value) : setColor(value);
  };

  const submitHandler = (e: React.FormEvent<HTMLElement>): void => {
    e.preventDefault();
    setColor("color-item1");
    setTitle("");
    createCategory({ id: Date.now(), title, color });
    setAddFolder(false);
  };
  return (
    <CategoryAdd
      colors={colors}
      color={color}
      title={title}
      onChangeHandler={onChangeHandler}
      submitHandler={submitHandler}
      setAddFolder={setAddFolder}
    />
  );
};

export default CategoryAddContainer;
