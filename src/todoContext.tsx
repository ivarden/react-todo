import React from "react";
import { state } from "./todoContainer";

const TodoContext = React.createContext(state);

const TodoProvider: React.FC = ({ children }) => {
  return <TodoContext.Provider value={state}>{children}</TodoContext.Provider>;
};

export { TodoContext, TodoProvider };
