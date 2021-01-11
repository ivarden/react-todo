import React from "react";
import CategoryButtons from "./CategoryButtons";
import CategoryAddFolder from "./CategoryAddFolder";
import CategoryFolder from "./CategoryFolder";
import "./App.scss";

import { TodoContext } from "../todoContext";

const App: React.FC = () => {
  const [addFolder, setAddFolder] = React.useState<boolean>(false);
  const { categorys, /*todos*/ } = React.useContext(TodoContext);
  return (
    <div className="todo">
      <div className="todo__sidebar">
        <div className="todo__list">
          <CategoryButtons setAddFolder={setAddFolder} />
          {categorys.map((category) => (
            <CategoryFolder
              key={category.id}
              text={category.title}
              color={category.color}
            />
          ))}
        </div>
      </div>
      {addFolder && <CategoryAddFolder setAddFolder={setAddFolder} />}

      <div className="todo__content">content</div>
    </div>
  );
};

export default App;
