import SearchBar from "./SearchBar";
import { useEffect, useState, useContext } from "react";
import DarkModeButton from "./DarkModeButton";
import CartButton from "./CartButton";
import { UserContext } from "../data/userdata";

export default function Header(props) {
  const { userData, setUserData } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    props.setSearch(searchTerm);
  }, [searchTerm]);
  return (
    <div
      className={
        "py-3 flex w-full items-center gap-5 justify-between " + props.className
      }
      style={{ background: "var(--background1)" }}
    >
      <DarkModeButton className="block lg:hidden" />
      <div className="hidden lg:flex items-center gap-7">
        <DarkModeButton className="h-8" />
        <CartButton
          className="w-14 relative text-xs"
          quantity={(() => {
            let overall = 0;
            for (let prod of userData.cart) {
              overall += prod.quantity;
            }
            return overall;
          })()}
        />
      </div>
    </div>
  );
}
