import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
function App() {
  const firebaseUrl = import.meta.env.VITE_API_KEY;

  const { register, handleSubmit, reset } = useForm();
  const submitHandler = (data) => {
    axios.post(`${firebaseUrl}contact.json`, { data });
    reset();
  };

  return (
    <>
      <div className="w-[550px] h-[400px] mx-auto my-24 bg-black text-center px-4 pt-10">
        <h1 className="text-2xl font-bold text-white">Contact Me</h1>

        <form action="" onSubmit={handleSubmit(submitHandler)}>
          <input
            {...register("name")}
            type="text"
            placeholder="Enter Your Name"
            className="bg-white p-2 rounded-2xl w-[350px] text-xl mt-4"
          />
          <input
            {...register("mail")}
            type="text"
            placeholder="Enter Your Mail"
            className="bg-white p-2 rounded-2xl w-[350px] text-xl mt-4"
          />
          <textarea
            {...register("message")}
            type="text"
            placeholder="Enter Your Message"
            className="bg-white p-2 rounded-2xl w-[350px] text-xl mt-4"
          ></textarea>
          <input
            type="submit"
            className="bg-blue-700 text-2xl text-white hover:cursor-pointer w-80 rounded-2xl mt-4"
          />
        </form>
      </div>
    </>
  );
}

export default App;
