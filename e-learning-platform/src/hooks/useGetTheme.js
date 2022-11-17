import { useEffect, useState } from "react";

const useGetTheme = () => {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme) {
      theme === "cupcake" ? setDark(false) : setDark(true);
    }
  }, []);

  return dark;
};

export default useGetTheme;
