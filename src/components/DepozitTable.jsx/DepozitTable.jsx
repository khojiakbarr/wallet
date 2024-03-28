import React, { useContext } from "react";
import { userContex } from "../../App";
import TableItems from "../TableItems/TableItems";

export default function DepozitTable() {
  const { user, dispatch } = useContext(userContex);
  return (
    <table className="w-full border ">
      <thead>
        <tr className="w-full">
          <th className="text-white">Card Name</th>
          <th className="text-white">Balance</th>
          <th className="text-white">Actions</th>
        </tr>
      </thead>
      <tbody className="w-full border">
        {user.cards.map((card) => {
          return (
            <TableItems
              key={card.id}
              card={card}
              
            />
          );
        })}
      </tbody>
    </table>
  );
}
