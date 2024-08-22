import React from "react";
import Titltes from "./types";
function Titles({ tittle }: Titltes) {
  return (
    <div className="flex row items-center gap-4">
      <hr className="w-[125px]" />
      <h1 className="text-secondary text-2xl font-secondary">{tittle}</h1>
      <hr className="w-[125px]" />
    </div>
  );
}

export default Titles;
