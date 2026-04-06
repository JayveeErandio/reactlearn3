import { useContext, useState, useEffect } from "react";
import { UserContext } from "../data/userdata";

export default function DarkModeButton({ className }) {
  const { userData, setUserData } = useContext(UserContext);

  const equal = function () {
    return userData.darkMode ? "dark" : "light";
  };

  const oppose = function () {
    return userData.darkMode ? "light" : "dark";
  };

  useEffect(() => {
    document.querySelector("body").setAttribute("data-theme", equal());
  }, [userData.darkMode]);

  return (
    <img
      className={" h-7 cursor-pointer " + className}
      onClick={() => {
        setUserData({
          ...userData,
          darkMode: !userData.darkMode,
        });
      }}
      src={"icons/" + oppose() + "mode.svg"}
    />
  );
}
