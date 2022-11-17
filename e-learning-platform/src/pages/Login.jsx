import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  signIn,
  signInWithGithub,
  signInWithGoogle,
} from "../firebase/authentication";
import useGetTheme from "../hooks/useGetTheme";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const [error, setError] = useState("");
  const [dark, setDark] = useState(false);

  const selectedTheme = useGetTheme();

  useEffect(() => {
    setDark(selectedTheme);
  }, [selectedTheme]);

  // sign in with email and password
  const signInHandler = async (data) => {
    setError((err) => "");
    const { email, password } = data;
    try {
      const user = await signIn(email, password);
      if (!user?.accessToken) {
        setError(user);
      }
    } catch (error) {
      console.log(error.code + error.message);
      setError(`${error.message}`);
    }
    reset();
  };

  // sign in with google

  const googleHandler = async () => {
    setError((err) => "");
    try {
      const user = await signInWithGoogle();
      if (!user?.accessToken) {
        setError(user);
      }
    } catch (error) {
      console.log(error.code + error.message);
    }
  };

  // sign in with github

  const githubHandler = async () => {
    setError((err) => "");
    try {
      const user = await signInWithGithub();
      if (!user?.accessToken) {
        setError(user);
      }
    } catch (error) {
      console.log(error.code + error.message);
    }
  };

  return (
    <div
      className="h-screen w-screen flex flex-col items-center justify-center gap-2 bg-gray-300"
      data-theme={dark ? "dracula" : "cupcake"}
    >
      <div className="w-[90%] sm:w-[22em] min-h-[30em] flex flex-col bg-base-100 rounded-lg p-8 gap-5 shadow-2xl shadow-slate-400">
        <div className="flex items-center justify-between">
          <h1 className="text-xl uppercase font-bold text-center ">Sign In</h1>
          <h1 className="text-xl uppercase font-bold text-center text-error cursor-pointer">
            <Link to="/">home</Link>
          </h1>
        </div>

        <form
          className="w-full flex flex-col items-start justify-center gap-1"
          onSubmit={handleSubmit(signInHandler)}
        >
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full text-md rounded-md border-2 border-slate-300 px-2 py-1 outline-none focus:ring focus:ring-accent text-black"
            required
            {...register("email")}
          />

          <label className="font-medium" htmlFor="password">
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
            className="w-full uppercase btn btn-md mt-5 btn-accent font-semibold"
          >
            Sign In
          </button>
        </form>

        <div className="w-full h-[4em] relative flex items-center justify-center">
          <p className="w-fit h-fit ring ring-primary rounded-md p-1 absolute m-auto bg-base z-50 font-bold">
            OR
          </p>
        </div>

        <div className="flex w-full h-auto items-center justify-center text-2xl gap-4">
          <i
            className="fa-brands fa-google cursor-pointer"
            onClick={googleHandler}
          ></i>
          <i
            className="fa-brands fa-github cursor-pointer"
            onClick={githubHandler}
          ></i>
        </div>

        <p className="text-md text-center font-medium">
          Need an account?{" "}
          <Link to="/registration">
            <span className="cursor-pointer font-bold underline text-success">
              SIGN UP
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
