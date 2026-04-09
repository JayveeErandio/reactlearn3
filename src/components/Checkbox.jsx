export default function Checkbox({
  check = false,
  color = "#f0f",
  className,
  setCheck,
}) {
  return (
    <svg
      className={className}
      width="2rem"
      height="2rem"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={setCheck}
    >
      <path
        d="M4 3h14a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z"
        style={{ fill: check ? "#0a0" : color, transition: "none" }}
      />
      <path
        style={{ display: check ? "block" : "none" }}
        d="M6.4 12.8 L 10 16 L 17.5 8"
        strokeWidth="2"
        stroke="white"
        fill="none"
      />
    </svg>
  );
}
