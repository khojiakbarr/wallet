import React from "react";

export default function TableItems({ card, isModal, setIsModal }) {
  return (
    <tr className="w-full border">
      <td className="text-white text-center">{card.cardName}</td>
      <td className="text-white text-center">{card.balance} UZS</td>
      <td className="text-center">
        <button
          className=" bg-[#45B68D] px-7 py-2.5 rounded-lg text-white m-2"
          type="button"
          onClick={() => setIsModal({ isModal: false, id: card.id })}
        >
          Deposid
        </button>{" "}
        <button className=" bg-[#E8503A] px-7 py-2.5 rounded-lg text-white">
          Withdraw
        </button>
      </td>
    </tr>
  );
}
