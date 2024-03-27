import React, { useContext } from "react";
import { userContex } from "../../App";

export default function Home() {
  const { user, dispatch } = useContext(userContex);

  return (
    <div className=" mt-4 max-width-[1200px] mx-auto p-[15px] ">
      <p className="font-[400] text-gray-700">Good morning</p>
      <h1 className="text-white text-[40px] font-[600]">
        {user.name ? user.name : "Name"}
      </h1>
      <br />
      <p className="font-[400] text-gray-700">Balance</p>
      <h2 className="text-white text-[40px] font-[600]">
        {user.mainBalance ? user.mainBalance : "balance"}
      </h2>

      
    </div>
  );
}
