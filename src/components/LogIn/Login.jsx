import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { userContex } from "../../App";

export default function Login() {
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { user, dispatch } = useContext(userContex);

  return (
    <div className="h-screen flex items-center justify-center flex-col bg-gradient-to-r from-[#0a286c] to-[#3e175a]">
      <h1 className="text-center text-gray-400 text-[40px] mb-7">Wallet App</h1>
      <form
        onSubmit={handleSubmit((data) => {
          navigate("/home");
          dispatch({ type: "name", ...data });
        })}
        className="border border-gray-900 p-5 flex flex-col gap-5 rounded-md"
      >
        <h1 className="text-gray-500 text-center text-[40px]">
          Enter Your Name
        </h1>
        <input
          className=" bg-[#284587] rounded-md py-1.5 px-7 text-[20px] text-[white] focus:right-inset"
          type="text"
          placeholder="Name"
          {...register("name", { required: true })}
        />
        <button className=" text-gray-400 border-2 bg-gradient-to-r from-[#315bc0] to-[#5a2480] border-solid border-gray-900 px-6 py-2 rounded-md text-[20px]">
          Next
        </button>
      </form>
    </div>
  );
}
