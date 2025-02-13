import { Route, BrowserRouter as Router, Routes } from "react-router";
import "./App.css";

import Menu from "./components/Menu/Menu";
import Home from "./pages/HomePage/Home";
import About from "./pages/AboutPage/About";
import Contact from "./pages/ContactPage/Contact";
import ToDo from "./pages/ToDoPage/ToDo";
import Register from "./pages/RegisterPage/Register";

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/ToDo" element={<ToDo />}></Route>
        <Route path="/Register" element={<Register />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
