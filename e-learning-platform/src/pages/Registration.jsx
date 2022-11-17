import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { registerUser } from "../firebase/authentication";
import useGetTheme from "../hooks/useGetTheme";

const Registration = () => {
  const { register, handleSubmit, reset } = useForm();
  const [error, setError] = useState("");

  const registerHandler = async (data) => {
    const { email, password, imageUrl, fullName } = data;
    setError((err) => "");
    try {
      const user = await registerUser({
        email,
        password,
        imageUrl,
        fullName,
      });
      if (!user?.accessToken) {
        setError(user);
      }
    } catch (error) {
      console.log(error.code + error.message);
    }
    reset();
  };

  const [dark, setDark] = useState(false);

  const selectedTheme = useGetTheme();

  useEffect(() => {
    setDark(selectedTheme);
  }, [selectedTheme]);

  return (
    <div
      className="h-screen w-screen flex flex-col items-center justify-center gap-2 bg-gray-300"
      data-theme={dark ? "dracula" : "cupcake"}
    >
      <div className="w-[90%] sm:w-[22em] min-h-[36em] flex flex-col bg-base-100 rounded-lg p-8 gap-5 shadow-lg shadow-slate-400">
        <div className="flex items-center justify-between">
          <h1 className="text-xl uppercase font-bold text-center ">Sign Up</h1>
          <h1 className="text-xl uppercase font-bold text-center text-error cursor-pointer">
            <Link to="/">home</Link>
          </h1>
        </div>
        <form
          className="w-full flex flex-col items-start justify-center gap-1"
          onSubmit={handleSubmit(registerHandler)}
        >
          <label htmlFor="name" className="font-medium ">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full text-md rounded-md border-2 border-slate-300 px-2 py-1 outline-none focus:ring focus:ring-accent text-black"
            required
            {...register("fullName")}
          />

          <label htmlFor="photo" className="font-medium ">
            Photo Url
          </label>
          <input
            type="text"
            id="photo"
            className="w-full text-md rounded-md border-2 border-slate-300 px-2 py-1 outline-none focus:ring focus:ring-accent text-black"
            required
            {...register("imageUrl")}
          />

          <label htmlFor="email" className="font-medium ">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full text-md rounded-md border-2 border-slate-300 px-2 py-1 outline-none focus:ring focus:ring-accent text-black"
            required
            {...register("email")}
          />

          <label className="font-medium " htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full text-md rounded-md border-2 border-slate-300 px-2 py-1 outline-none focus:ring focus:ring-accent text-black"
            required
            {...register("password")}
          />
          {error && (
            <p className="flex items-center flex-row-reverse gap-2 text-sm my-1 font-medium text-error">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full uppercase btn font-semibold btn-md mt-5 btn-accent"
          >
            Sign Up
          </button>
        </form>

        <div className="w-full h-[4em] relative flex items-center justify-center">
          <p className="w-fit h-fit ring ring-primary rounded-md p-1 absolute m-auto bg-base z-50 font-bold">
            OR
          </p>
        </div>

        <p className="text-md text-center font-medium ">
          Already a user?{" "}
          <Link to="/login">
            <span className="cursor-pointer font-bold underline text-success">
              LOGIN
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
