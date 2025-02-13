import { FaTrash } from "react-icons/fa";

export default function ToDoItem({ todo, removeToDo }) {
  return (
    <div className="flex gap-10 text-2xl p-5 justify-around bg-gray-300 w-full rounded-full font-semibold">
      {todo.task}
      <div
        onClick={() => removeToDo(todo.id)}
        className="flex justify-center items-center p-2 bg-red-600 rounded-full"
      >
        <FaTrash />
      </div>
    </div>
  );
}
