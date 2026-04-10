import { useContext, useState } from "react";
import { UserContext } from "../data/userdata";
import CartLogo from "./CartLogo";

export default function CartButton(props) {
  const { userData, setUserData } = useContext(UserContext);
  let [defQuantity, defSetQuantity] = useState(0);

  let quantity = props.quantity ?? defQuantity;
  let setQuantity = props.setQuantity ?? defSetQuantity;

  return (
    <div className={props.className}>
      <div
        className={" cursor-pointer overflow-hidden shadow-lg aspect-square"}
        style={{ borderRadius: "100%" }}
        onClick={() => {
          setUserData({ ...userData, showCart: true });
          document.querySelector("body").style.overflow = "hidden";
        }}
      >
        <CartLogo className="w-full h-full bg-(--background2) p-[18%] filter-(--invert)" />
      </div>
      <p
        className={
          (quantity == 0 ? "scale-0" : "") +
          " text-lg lg:text-sm translate-x-[50%] -translate-y-[50%] absolute z-7 top-[15%] right-[15%] bg-red-500 w-[40%] lg:w-[50%] flex justify-center items-center text-white rounded-full aspect-square"
        }
      >
        {quantity}
      </p>
    </div>
  );
}
