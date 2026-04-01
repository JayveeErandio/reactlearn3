export default function CartButton() {
  return (
    <div
      className="p-2.5 rounded-4xl shadow-md cursor-pointer"
      style={{ background: "var(--background2)" }}
    >
      <img
        src="icons/cart.svg"
        className="h-8"
        style={{ filter: "var(--invert)" }}
      />
    </div>
  );
}
