import React from "react";
import CategoryButtons from "./CategoryButtons";
import CategoryAddFolder from "./CategoryAddFolder";
import CategoryFolder from "./CategoryFolder";
import "./App.scss";

const App: React.FC = () => {
  const [addFolder, setAddFolder] = React.useState<boolean>(false);
  return (
    <div className="todo">
      <div className="todo__sidebar">
        <div className="todo__list">
          <CategoryButtons setAddFolder={setAddFolder} />
          <CategoryFolder text="Books" />
          <CategoryFolder text="Sport" color="green" />
          <CategoryFolder text="JavaScript" color="skyblue" />
          <CategoryFolder text="JavaScript" color="#97e900" />
          <CategoryFolder text="React" />
        </div>
      </div>
      {addFolder && <CategoryAddFolder setAddFolder={setAddFolder} />}

      <div className="todo__content">content</div>
    </div>
  );
};

export default App;
