import React from "react";

export default function TableItems({ card }) {
  return (
    <tr>
      <td>{card.cardName}</td>
      <td>{card.balance}</td>
    </tr>
  );
}
