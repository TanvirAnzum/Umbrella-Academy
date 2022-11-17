import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import useGetTheme from "../hooks/useGetTheme";

const Layout = () => {
  const currentTheme = useGetTheme();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(currentTheme);
  }, [currentTheme]);
  return (
    <div
      className="w-full min-h-screen bg-base-100 flex flex-col gap-10"
      data-theme={dark ? "dracula" : "cupcake"}
    >
      <Navigation setDark={setDark} dark={dark} />
      <Outlet />
    </div>
  );
};

export default Layout;
