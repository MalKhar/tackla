import React from "react";

function Input() {
  const [value, setValue] = React.useState("");
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
        value
      )}`;
      window.open(searchUrl, "_blank");
    }
  };
  return (
    <input
      type="text"
      className="border-rounded-full border-indigo-300 w-full p-2 bg-indigo-500 bg-opacity-50 rounded-full text-center"
      onKeyDown={handleKeyDown}
      onChange={(e) => setValue(e.target.value)}
      value={value}
    />
  );
}

export default Input;
