import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/LogIn/Login";
import Home from "./components/Home/Home";
import { createContext, useEffect, useReducer } from "react";
import { v4 as id } from "uuid";

const userContex = createContext();

function App() {
  const [user, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "name":
          return { ...state, name: action.name };

        case "mainBalance":
          return { ...state, balance: +action.balance };

        case "addCard":
          return {
            ...state,
            cards: [...state.cards, { id: id(), ...action.data }],
          };

        case "update":
          state.cards[action.index] = {
            ...state.cards[0],
            balance: action.summa,
          };
          return state;

        // case "deposit":
        //   return
        default:
          return state;
      }
    },
    {
      balance: 0,
      cards: [],
    }
  );

  function calcBalance() {
    let sum = 0;
    for (let i = 0; i < user.cards.length; i++) {
      sum += +user.cards[i].balance;
      console.log(sum);
    }
    dispatch({ type: "update", upBalance: +sum });
  }

  useEffect(() => {
    calcBalance();
  }, [user.cards]);

  return (
    <userContex.Provider value={{ user, dispatch }}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home calcBalance={calcBalance} />} />
      </Routes>
    </userContex.Provider>
  );
}

export { userContex };
export default App;
