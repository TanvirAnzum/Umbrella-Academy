import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-screen w-full flex item-center justify-center flex-col gap-2">
      <p className="font-bold text-lg text-accent uppercase text-center">
        Oops!!Page not found!
      </p>
      <h1 className="font-bolder text-9xl text-error text-center">404</h1>
      <p className="font-bold text-lg text-accent uppercase text-center">
        sorry, but the page you requested was not found!
      </p>
      <Link to="/" className="text-center">
        <button className="btn btn-success">Home</button>
      </Link>
    </div>
  );
};

export default Error;
