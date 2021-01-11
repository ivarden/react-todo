export const createCategory: ICreateCategory = ({ id, title, color }) => {
  categorys.push({ id, title, color });
};

const categorys: ITodoCategory[] = [
  { id: 1, title: "JavaScript", color: "color-item1" },
  { id: 2, title: "React", color: "color-item2" },
];
const todos: ITodo[] = [
  {
    id: 1,
    category: categorys[0],
    title: "Learn JS",
    status: false,
    color: "color-item1",
  },
];
export const state: IState = {
  categorys,
  todos,
  createCategory,
  createTodo: (todo) => {},
  editTodo: (id) => {},
  closeTodo: (id) => {},
  deleteTodo: (id) => {},
};
