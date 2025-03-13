import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [services, setServices] = useState([]);
  const authorizationToken = `Bearer ${token}`;

  const API = import.meta.env.VITE_APP_URI_API;

  const storeTokenInLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken);
  };

  const isLoggedIn = !!token;

  const LogoutUser = () => {
    setToken(""); // ✅ Clear the state
    localStorage.removeItem("token");
    setUser(null);
  };

  // JWT Authentication :- ( To get the currently loggedIn user data )
  const userAuthentication = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API}/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("user data", data.userData);
        setUser(data.userData);
        setIsLoading(false);
      } else {
        console.log("Error fetching user data");
        setIsLoading(false);
      }
    } catch (error) {
      console.log("Error fetching user data");
    }
  };

  // To fetxh the services data from the database :-
  const getServices = async () => {
    try {
      const response = await fetch(`${API}/api/data/services`, {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.mssg);
        setServices(data.mssg);
      }
    } catch (error) {
      console.log(`services frontend error: ${error}`);
    }
  };

  useEffect(() => {
    getServices();
    if (token) {
      userAuthentication();
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        storeTokenInLS,
        LogoutUser,
        isLoggedIn,
        user,
        services,
        authorizationToken,
        isLoading,
        API,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);

  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }

  return authContextValue;
};
