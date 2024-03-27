import React, { useContext } from "react";
import { userContex } from "../../App";
import TableItems from "../TableItems/TableItems";

export default function DepozitTable() {
  const [user, dispatch] = useContext(userContex);

  return (
    <table>
      <thead>
        <tr>
          <th>Card Name</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        {/* {user.cards.map((card) => {
          return <TableItems key={card.id} card={card} />;
        })} */}
      </tbody>
    </table>
  );
}
