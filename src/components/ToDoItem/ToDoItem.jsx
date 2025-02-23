import { FaTrash } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";

export default function ToDoItem({ todo, removeToDo, updateTodo, toDos }) {
  return (
    <div
      className={
        toDos.isComplete
          ? ""
          : "flex gap-10 text-2xl p-5 justify-around bg-gray-300 w-full rounded-full font-semibold"
      }
    >
      {todo.task}
      <div className="flex gap-3">
        <button
          onClick={() => removeToDo(todo.id)}
          className="flex justify-center items-center p-2 bg-red-600 rounded-full"
        >
          <FaTrash />
        </button>
        <button
          onClick={() => updateTodo(todo.id)}
          className="flex justify-center items-center p-2 bg-yellow-600 rounded-full"
        >
          <HiPencilAlt />
        </button>
      </div>
    </div>
  );
}
