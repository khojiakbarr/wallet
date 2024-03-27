import React, { useContext } from "react";
import MoneyCard from "../MoneyCard/MoneyCard";
import { userContex } from "../../App";
import Add from "../addCard/Add";
import "./Money.css";

export default function Money({ calcBalance }) {
  const { user, dispatch } = useContext(userContex);

  return (
    <div className="flex overflow-x-scroll shrink-1 gap-3 scrollBar ml-3">
      {user.cards.map((card) => {
            return <MoneyCard key={card.id} card={card} />;
          })}
      <Add calcBalance={calcBalance} />
    </div>
  );
}
