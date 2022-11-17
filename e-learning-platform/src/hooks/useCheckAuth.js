import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

const useCheckAuth = () => {
  const auth = useContext(AuthContext);
  if (auth?.accessToken) return true;
  else return false;
};

export default useCheckAuth;
