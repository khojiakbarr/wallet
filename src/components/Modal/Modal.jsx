import React, { useContext } from "react";
import { userContex } from "../../App";
import { useForm } from "react-hook-form";
import { type } from "@testing-library/user-event/dist/type";

export default function Modal({ isModal, setIsModal, setactive, isactive }) {
  const { user, dispatch } = useContext(userContex);
  const { register, handleSubmit } = useForm();

  // {absolute top-0 left-0 w-screen hidden}
  return (
    <div
      className={`bg-[#070628] h-screen ${isModal.isModal ? "hidden" : null}`}
    >
      <div className="flex justify-between p-6">
        <h2 className="text-white">Deposit</h2>
        <button
          className="bg-gray-800 text-white px-7 py-2 rounded-lg"
          onClick={() => setIsModal({ ...isModal, isModal: !isModal.isModal })}
        >
          Close
        </button>
      </div>

      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          user.cards.forEach((element, i) => {
            console.log(element.id);
            if (element.id === isModal.id) {
              const summa = +data.upBalance + +element.balance;
              dispatch({ type: "update", summa, index: i });
              console.log(summa);
            }
          });
        })}
        className="flex flex-col max-w-[400px] mx-auto bg-gray-600 p-6 rounded-lg gap-5"
      >
        <h3 className="text-white text-center text-[25px]">Deposit</h3>
        <input
          type="number"
          className=" outline-none bg-gray-700 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("upBalance", { required: true })}
          placeholder="Enter deposit amount"
        />
        <button
          onClick={() => {
            setactive(!isactive);
            setIsModal({ ...isModal, isModal: !isModal.isModal });
          }}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full"
        >
          Save
        </button>
      </form>
    </div>
  );
}
