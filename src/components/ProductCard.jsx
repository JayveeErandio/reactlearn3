import ItemNoProductPage from "./ItemNoProductPage";

export default function ProductCard(props) {
  let baho = props.name;

  return (
    <div
      className="relative shadow-md w-37.5 p-2.5 rounded-lg"
      style={{ background: "var(--background2)" }}
    >
      <div className="w-full aspect-square relative">
        <img
          className="object-cover absolute top-1/2 -translate-y-1/2"
          src={"products/" + props.name + ".png"}
        />
      </div>

      <div className="w-22" style={{ color: "var(--color1)" }}>
        <p className="flex items-end text-sm leading-none min-h-[2rem]">
          {props.name
            ? props.name
                ?.split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")
            : "Product"}
        </p>
        <p className="font-bold text-lg">
          {props.price ? "₱" + props.price : "Price"}
        </p>
      </div>
      <ItemNoProductPage className="absolute right-0 bottom-0 translate-5 z-1" />
    </div>
  );
}
