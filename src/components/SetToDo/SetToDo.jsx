import { useState } from "react";

export default function SetToDo({ addTask, toDos }) {
  const [userInfo, setUserInfo] = useState("");

  const handleChange = (e) => {
    setUserInfo(e.currentTarget.value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    addTask(userInfo);
    setUserInfo("");
  };

  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      handleSumbit(e);
    }
  };

  return (
    <form onSubmit={handleSumbit}>
      <div className="text-3xl font-semibold px-6 py-5 text-center">
        Cank: {toDos.length}
      </div>
      <div className="border-black border-3 font-semibold rounded-full">
        <input
          type="text"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Enter ToDo"
          value={userInfo}
          className="p-5 text-xl outline-none  text-white "
          maxLength="13"
        />
        <button className="p-5 text-xl bg-[orange] rounded-full font-semibold">
          Add ToDo
        </button>
      </div>
    </form>
  );
}
