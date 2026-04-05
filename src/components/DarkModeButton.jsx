import { useState, useEffect } from "react";

export default function DarkModeButton({ className }) {
  const [theme, setTheme] = useState("light");

  const oppose = function () {
    return theme == "light" ? "dark" : "light";
  };

  useEffect(() => {
    document.querySelector("body").setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <img
      className={" h-7 cursor-pointer " + className}
      onClick={() => {
        setTheme(oppose());
      }}
      src={"icons/" + oppose() + "mode.svg"}
    />
  );
}
