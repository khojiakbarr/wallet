import React from "react";

export default function MoneyCard({ card }) {
  return (
    <div className="w-[280px] bg-[#ffffff2e] rounded-2xl p-[20px] my-2">
      <p className="text-gray-600">Name:</p>
      <h3 className="text-white text-[27px] font-[700]">{card.cardName}</h3>
      <br />
      <p className="text-gray-600">Balance:</p>
      <h4 className="text-white w-[250px] font-[500] text-[25px]">
        {card.balance}.00 UZS
      </h4>
    </div>
  );
}
