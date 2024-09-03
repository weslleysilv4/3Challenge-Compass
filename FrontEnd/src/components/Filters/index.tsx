import React, { useState } from "react";
import SortButton from "@Components/SortButton";
import { Select, SelectItem } from "@nextui-org/react";

function Filters({
  totalTours,
  onSortChange,
}: {
  totalTours: number;
  onSortChange: (field: string, ascending: boolean) => void;
}) {
  const [sortField, setSortField] = useState("name");
  const [isAscending, setIsAscending] = useState(true);

  const handleSortOrderChange = () => {
    setIsAscending(!isAscending);
    onSortChange(sortField, !isAscending);
  };

  const handleFieldChange = (field: string) => {
    setSortField(field);
    onSortChange(field, isAscending);
  };

  return (
    <div className="flex flex-row justify-between items-center">
      <span>{totalTours} Tours</span>
      <div className="flex flex-row items-center gap-2">
        <span>Sort By</span>
        <SortButton onClick={handleSortOrderChange} />
        <Select
          color="secondary"
          className="w-[200px]"
          placeholder="Filter by"
          variant="bordered"
          aria-label="Select the filter option"
          onChange={(e) => {
            handleFieldChange(e.target.value);
          }}
        >
          <SelectItem key={"name"} value={"name"}>
            Title
          </SelectItem>
          <SelectItem key={"price"} value={"price"}>
            Price
          </SelectItem>
          <SelectItem key={"initialRatingAverage"} value={"rating"}>
            Rating
          </SelectItem>
        </Select>
      </div>
    </div>
  );
}

export default Filters;
