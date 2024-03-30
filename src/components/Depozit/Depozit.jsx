import React, { useState } from "react";
import "./Depozit.css";
import DepozitTable from "../DepozitTable.jsx/DepozitTable";
import Modal from "../Modal/Modal";

export default function Depozit({ clas, isactive, setactive }) {
  const [isModal, setIsModal] = useState({
    isModal: true,
    id: null,
  });
  return (
    <div
      className={`absolute w-screen h-screen bg-[#0706288d] backdrop-blur-[10px] top-0 left-0 depozit ${clas} p-3`}
    >
      <Modal isModal={isModal} setIsModal={setIsModal} setactive={setactive} isactive={isactive}/>
      <div className="px-6 py-7 flex justify-between mb-4">
        <h1 className="text-white text-[25px]"> Card & Wallets</h1>
        <button
          onClick={() => setactive(!isactive)}
          className="bg-gray-800 text-white px-7 py-2 rounded-lg"
        >
          Close
        </button>
      </div>
      <DepozitTable isModal={isModal} setIsModal={setIsModal} />
    </div>
  );
}
