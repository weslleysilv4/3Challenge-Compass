import SortButton from "@Components/SortButton";
import { Select, SelectItem } from "@nextui-org/react";
import React from "react";

function Filters({ totalTours }: { totalTours: number }) {
  return (
    <div className="flex flex-row justify-between items-center">
      <span>{totalTours} Tours</span>
      <div className="flex flex-row items-center gap-2">
        <span>Sort By</span>
        <SortButton />
        <Select
          color="secondary"
          className="w-[200px]"
          placeholder="Filter by"
          variant="bordered"
          aria-label="Select the filter option"
        >
          <SelectItem key={"title"} value={"title"}>
            Title
          </SelectItem>
          <SelectItem key={"price"} value={"price"}>
            Price
          </SelectItem>
          <SelectItem key={"rating"} value={"rating"}>
            Rating
          </SelectItem>
        </Select>
      </div>
    </div>
  );
}

export default Filters;
