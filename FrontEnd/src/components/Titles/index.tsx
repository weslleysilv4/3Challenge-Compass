import React from "react";
import TitlesProps from "./types";
function Titles({ title, position }: TitlesProps) {
  return (
    <div
      className={`flex items-center gap-4 ${
        position === "left"
          ? "justify-start"
          : position === "right"
          ? "justify-end"
          : "justify-center"
      }`}
    >
      {(position === "center" || position === "right") && (
        <hr className="w-[125px]" />
      )}
      <h1 className="text-secondary text-2xl font-secondary">{title}</h1>
      {(position === "center" || position === "left") && (
        <hr className="w-[125px]" />
      )}
    </div>
  );
}

export default Titles;
