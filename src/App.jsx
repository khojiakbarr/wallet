import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/LogIn/Login";
import Home from "./components/Home/Home";
import { createContext, useReducer } from "react";

const userContex = createContext();

function App() {
  const [user, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "name":
        return { ...state, name: action.name };
    }
  }, {});

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export { userContex };
export default App;
