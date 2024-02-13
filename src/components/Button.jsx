const bgClass = {
  blue: "bg-blue-500 hover:bg-blue-700",
  green: "bg-green-500 hover:bg-green-700",
  gray: "bg-gray-200 hover:bg-gray-300",
  amber: "bg-amber-500 hover:bg-amber-600",
};

const colorClass = {
  white: "text-white",
};

const widthClass = {
  full: "w-full",
};

function Button({ children, bg, color, width, onClick }) {
  let classes = bg ? bgClass[bg] : "";
  classes += color ? " " + colorClass[color] : "";
  classes += width ? " " + widthClass[width] : "";

  return (
    <button className={`btn px-3 py-1.5 rounded-full ${classes}`}>
      {children}
    </button>
  );
}

export default Button;
