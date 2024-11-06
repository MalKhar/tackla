import React from "react";

function Favorites() {
  return (
    <div className="flex flex-col gap-4 items-center align-items-center">
      <div className="flex flex-row mt-4">
        <h1 className="text-4xl font-outlined">Favoritos</h1>
      </div>
      <div className="grid p-4 grid-cols-4 gap-4 bg-indigo-700 bg-opacity-50 text-center rounded-lg w-full h-28">
        <h1 className="text-2xl text-white">Youtube</h1>
        <h1 className="text-2xl text-white">Letterboxd</h1>
        <h1 className="text-2xl text-white">Instagram</h1>
        <h1 className="text-2xl text-white">Twitter</h1>
      </div>
    </div>
  );
}

export default Favorites;
