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
      default:
        return state;
    }
  }, {});
  console.log(user);

  return (
    <userContex.Provider value={(user, dispatch)}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </userContex.Provider>
  );
}

export { userContex };
export default App;
