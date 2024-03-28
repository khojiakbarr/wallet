import React, { useContext } from "react";
import { userContex } from "../../App";
import { useForm } from "react-hook-form";

export default function Add() {
  const { user, dispatch } = useContext(userContex);
  const { register, handleSubmit } = useForm();

  let isTrue = false;
  if (isTrue) {
    calcBalance();
  }

  function calcBalance() {
    let sum = 0;
    for (let i = 0; i < user.cards.length; i++) {
      sum += +user.cards[i].balance;
      console.log(sum);
    }
    isTrue = false;
    dispatch({ type: "update", upBalance: +sum });
  }
  
  return (
    <form
      onSubmit={handleSubmit((data) => {
        dispatch({ type: "addCard", data: data });
        calcBalance();
        isTrue = true;
      })}
      className="w-[280px] bg-[#ffffff2e] rounded-2xl p-[20px] my-2 flex flex-col gap-2"
    >
      <h2 className="text-center text-white text-[20px]">Add Wallet</h2>
      <label className="flex flex-col">
        <span className="text-[14px] text-gray-300">Name : </span>
        <input
          className=" bg-[#284587] rounded-md py-1.5 px-4 text-[12px] text-[white] focus:right-inset outline-none"
          type="text"
          {...register("cardName", { required: true })}
        />
      </label>
      <label className="flex flex-col">
        <span className="text-[14px] text-gray-300">UZS:</span>
        <input
          className=" bg-[#284587] rounded-md py-1.5 px-4 text-[12px] text-[white] focus:right-inset outline-none"
          type="number"
          {...register("balance", { required: true }, Number)}
        />
      </label>
      <button  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-all ease-linear duration-300 w-full mt-1">
        Add Wallet
      </button>
    </form>
  );
}
