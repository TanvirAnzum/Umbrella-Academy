import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { AuthContext } from "../contexts/authContext";
import { userSignOut } from "../firebase/authentication";

const Navigation = ({ setDark, dark }) => {
  const [navMenu, setNavMenu] = useState(false);
  const [user, setUser] = useState(null);

  // theme handling

  const themeHandler = (value) => {
    setDark(value);
    localStorage.setItem("theme", value ? "drakula" : "cupcake");
  };

  // active nav checking

  const location = useLocation();
  const { pathname } = location;

  // sign out handler

  const singOutHandler = async () => {
    await userSignOut();
    setUser(null);
  };

  // authentication checking

  const auth = useContext(AuthContext);

  useEffect(() => {
    if (auth?.accessToken) {
      setUser(auth.user);
    }
  }, [auth?.accessToken, auth?.user]);

  return (
    <nav className="w-full min-h-[10vh] shadow-lg rounded">
      <div className="w-[96%] flex flex-col sm:w-[80%] h-full m-auto lg:flex-row lg:items-center lg:justify-between p-5 relative">
        <div className="flex h-full items-center gap-0 font-semibold text-xl">
          <img className="hover:cursor-pointer w-[2em]" src={logo} alt="" />
          <h1 className="hover:cursor-pointer">The Umbrella Academy</h1>
        </div>

        <ul className="hidden lg:flex h-full items-center gap-10 font-semibold text-xl">
          <li
            className={
              pathname === "/"
                ? "hover:cursor-pointer text-accent"
                : "hover:cursor-pointer"
            }
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={
              pathname === "/courses"
                ? "hover:cursor-pointer text-accent"
                : "hover:cursor-pointer"
            }
          >
            <Link to="/courses">Courses</Link>
          </li>
          <li
            className={
              pathname === "/faq"
                ? "hover:cursor-pointer text-accent"
                : "hover:cursor-pointer"
            }
          >
            <Link to="/faq">F.A.Q</Link>
          </li>
          <li
            className={
              pathname === "/blog"
                ? "hover:cursor-pointer text-accent"
                : "hover:cursor-pointer"
            }
          >
            <Link to="/blog">Blog</Link>
          </li>
        </ul>

        <div className="hidden h-full lg:flex items-center gap-10 font-semibold text-xl">
          {user && (
            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
              <img
                src={user.photoURL}
                className="w-[2em] h-[2em] ring ring-accent rounded-[50%]"
                alt=""
              />
            </div>
          )}
          {!user && <Link to="/login">Login</Link>}
          {user && (
            <button className="btn btn-error" onClick={singOutHandler}>
              Log out
            </button>
          )}
          <label className="swap swap-rotate">
            <input type="checkbox" onClick={() => themeHandler(!dark)} />

            <svg
              className="swap-on fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            <svg
              className="swap-off fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>

        <label className="btn btn-circle swap swap-rotate lg:hidden absolute right-1">
          <input
            type="checkbox"
            className="lg:hidden"
            onClick={() => setNavMenu(!navMenu)}
          />

          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>

        {/* mobile menu */}
        {navMenu && (
          <ul className="flex flex-col lg:hidden items-center justify-center gap-3 font-semibold text-xl">
            <li className="hover:cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:cursor-pointer">
              <Link to="/courses">Courses</Link>
            </li>
            <li className="hover:cursor-pointer">
              <Link to="/faq">F.A.Q</Link>
            </li>
            <li className="hover:cursor-pointer">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="hover:cursor-pointer">
              {user && (
                <img
                  src={user.photoURL}
                  className="w-[2em] h-[2em] rounded-full"
                  alt=""
                />
              )}
              {!user && <Link to="/login">Login</Link>}
            </li>
            {user && (
              <button className="btn btn-error" onClick={singOutHandler}>
                Log out
              </button>
            )}
            <li
              className="hover:cursor-pointer"
              onClick={() => themeHandler(!dark)}
            >
              Toggle Theme
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
