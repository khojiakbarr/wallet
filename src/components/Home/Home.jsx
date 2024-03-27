import React, { useContext, useState } from "react";
import { userContex } from "../../App";
import Money from "../Money/Money";
import Depozit from "../Depozit/Depozit";

export default function Home({ calcBalance }) {
  const { user, dispatch } = useContext(userContex);
  const [isactive, setactive] = useState(false)
  const handleToggle = () => {
    setactive(!isactive)
  };

  return (
    <>
      <div className=" mt-4 max-width-[1200px] mx-auto p-[15px] ">
        <p className="font-[400] text-gray-700">Good morning</p>
        <h1 className="text-white text-[40px] font-[600]">
          {user.name ? user.name : "Name"}
        </h1>
        <br />
        <p className="font-[400] text-gray-700">Balance</p>
        <h2 className="text-white text-[40px] font-[600]">
          UZS {user.balance ? user.balance : "0"}
        </h2>
      </div>
      <Money calcBalance={calcBalance} />
      <Depozit clas={isactive? 'toggle': null} isactive={isactive} setactive={setactive}  />
      <div className="flex justify-between px-3 mt-[100px]">
        <button onClick={handleToggle} className="bg-[#45B68D] px-7 py-2.5 rounded-lg">Deposit</button>
        <button className="bg-[#E8503A] px-7 py-2.5 rounded-lg">
          Withdraw
        </button>
      </div>
    </>
  );
}
