import { useState } from "react";
import SetToDo from "../../components/SetToDo/SetToDo";
import ToDoItem from "../../components/ToDoItem/ToDoItem";

export default function ToDo() {
  const [toDos, setToDos] = useState([]);

  function addTask(userInfo) {
    if (userInfo) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInfo,
      };
      setToDos([...toDos, newItem]);
    }
  }
  console.log(toDos);

  function removeToDo(id) {
    setToDos([...toDos.filter((a) => a.id !== id)]);
  }
  function updateTodo(id) {
    const newNameForTodo = prompt("Enter New name");
    setToDos((state) =>
      state.map((e) => (e.id === id ? { ...e, task: newNameForTodo } : e))
    );
  }

  return (
    <div className="w-full p-10 flex flex-col items-center ">
      <div className=" flex flex-col items-center px-10 py-5 rounded-xl bg-gray-400 gap-5 ">
        <SetToDo addTask={addTask} toDos={toDos} />
        {toDos.length > 0 &&
          toDos.map((e) => {
            return (
              <ToDoItem
                key={e.id}
                todo={e}
                removeToDo={removeToDo}
                updateTodo={updateTodo}
                setToDos={setToDos}
              />
            );
          })}
      </div>
    </div>
  );
}
