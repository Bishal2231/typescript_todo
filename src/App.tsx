import { useState } from "react";
import "./App.css";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

// ✅ Define Todo type
type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

function App() {
  // ✅ State
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  // ✅ Add Todo Handler
  const addTodo = () => {
    if (!input.trim()) {
      alert("Please enter a task");
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInput("");
  };
  const handleDelete = (id: number) => {
    const filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };
  return (
    <div className="flex justify-center bg-black h-[100vh] text-white">
      <div className="flex flex-col w-140 p-8 border  text-white m-10">
        <div className="flex justify-center m-4">
          <div className="text-lg font-bold">Todos for the day</div>
        </div>

        {/* ✅ Input and Add Button */}
        <div className="flex flex-row items-center gap-4 justify-between">
          <input
            className="border-2 px-6 py-2 rounded  w-full"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Add todo"
          />
          <button
            onClick={addTodo}
            className="bg-white text-black px-4 py-2 rounded whitespace-nowrap"
          >
            Add Todo
          </button>
        </div>

        {/* ✅ Todos Display */}
        <div className="flex justify-center m-5 text-lg font-bold">Todos</div>

        <div className="flex flex-col gap-4">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="border-2 px-6 py-3 rounded flex flex-row items-center justify-between"
            >
              <div>{todo.text}</div>
              <div className="flex flex-row   text-white gap-4 text-xl cursor-pointer">
              <MdDelete onClick={() => handleDelete(todo.id)} />
              <CiEdit />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
