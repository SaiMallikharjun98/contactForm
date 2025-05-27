import React from "react";
import { useForm } from "react-hook-form";

function App() {
  let { register, handleSubmit, reset } = useForm();
  const submitHandler = (data) => {
    console.log(data);
    reset();
  };
  return (
    <>
      <div className="w-[600px] h-3/4 mx-auto my-24 bg-black ">
        <h1 className="w-full text-2xl font-bold text-white">Contact Me</h1>
        <div className="flex justify-center space-x-5 px-5">
          <form action="" onSubmit={handleSubmit(submitHandler)}>
            <input
              {...register("name")}
              type="text"
              placeholder="Enter Your Name"
              className="bg-white p-2 rounded-2xl w-[250px] text-xl mt-4"
            />
            <input
              {...register("mail")}
              type="text"
              placeholder="Enter Your Mail"
              className="bg-white p-2 rounded-2xl w-[250px] text-xl mt-4"
            />
            <textarea
              {...register("message")}
              type="text"
              placeholder="Enter Your Message"
              className="bg-white p-2 rounded-2xl w-[350px] text-xl mt-4"
            ></textarea>
            <input
              type="submit"
              className="bg-blue-700 text-2xl text-white hover:cursor-pointer w-80 rounded-2xl"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
