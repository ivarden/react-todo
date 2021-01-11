interface ITodoCategory {
  id: number;
  title: string;
  color: string;
}
interface ITodo {
  id: number;
  category: ITodoCategory;
  title: string;
  status: boolean;
  color: string;
}
interface ICreateCategory {
  ({ id: number, title: string, color: string }): void;
}
interface IState {
  categorys: ITodoCategory[];
  todos: ITodo[];
  createCategory: ICreateCategory;
  createTodo: (todo: ITodo) => void;
  editTodo: (id: number) => void;
  closeTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}
interface ICategoryAdd {
  colors: number[];
  color: string;
  title: string;
  onChangeHandler: (e: React.FormEvent<HTMLInputElement>) => void;
  submitHandler: (e: React.FormEvent<HTMLElement>) => void;
  setAddFolder: (title: boolean) => void;
}
