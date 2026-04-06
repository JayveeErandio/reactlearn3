import { useContext } from "react";
import { UserContext } from "../data/userdata";

export default function CartButton(props) {
  const { userData, setUserData } = useContext(UserContext);

  return (
    <div
      className={
        "w-12 flex justify-center p-2.5 shadow-md cursor-pointer " +
        props.className
      }
      style={{
        background: "var(--background2)",
        borderRadius: "100%",
        aspectRatio: 1,
      }}
      onClick={() => {
        setUserData({ ...userData, showCart: true });
      }}
    >
      <img
        src="icons/cart.svg"
        style={{ filter: "var(--invert)", width: "100%" }}
      />
    </div>
  );
}
