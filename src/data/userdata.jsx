import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export class ProductCarted {
  id;
  quantity;
}

export function UserProvider({ children }) {
  const [userData, setUserData] = useState(() => {
    const stored = localStorage.getItem("grocerian");
    return stored
      ? JSON.parse(stored)
      : {
          cart: [],
          darkMode: false,
          showCart: true,
        };
  });

  useEffect(() => {
    localStorage.setItem("grocerian", JSON.stringify(userData));
  }, [userData]);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}
