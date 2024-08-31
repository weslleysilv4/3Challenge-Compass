import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { forwardRef } from "react";

interface SearchBoxProps {
  placeholder?: string;
  value: string;
  onChange: (newValue: string) => void;
}

const SearchBox = forwardRef<HTMLInputElement, SearchBoxProps>((props, ref) => {
  return (
    <div className="p-7 bg-[#F7F8FA]">
      <h6 className="text-primary font-bold text-lg">Search</h6>
      <div className="h-[52px] w-[214px] flex flex-row items-center justify-center bg-white px-4 py-2 mt-2 gap-2">
        <input
          ref={ref}
          type="text"
          placeholder={props.placeholder}
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
          className="w-full h-full outline-none"
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </div>
  );
});

export default SearchBox;
