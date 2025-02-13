import { NavLink } from "react-router";

export default function Menu() {
  const toMap = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Contact",
      path: "/contact",
    },
    {
      id: 4,
      name: "ToDo",
      path: "/ToDo",
    },
    {
      id: 5,
      name: "Register",
      path: "/register",
    },
  ];

  return (
    <header>
      <ul className="w-full flex justify-around bg-gray-500 gap-5 p-5 text-3xl">
        {toMap.map((e) => (
          <NavLink
            to={e.path}
            key={e.id}
            className={({ isActive }) =>
              isActive ? "text-sky-500 " : "text-red-500"
            }
          >
            <li>{e.name}</li>
          </NavLink>
        ))}
      </ul>
    </header>
  );
}
