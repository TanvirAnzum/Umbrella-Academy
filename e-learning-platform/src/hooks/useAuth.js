import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { accessToken, providerData } = user;
        setAuth({ accessToken, user: providerData[0] });
      } else setAuth(null);
    });
  }, []);

  return auth;
};

export default useAuth;
