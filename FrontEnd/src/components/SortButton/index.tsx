import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortAlphaDown,
  faSortAlphaUp,
} from "@fortawesome/free-solid-svg-icons";

const SortButton = () => {
  const [isAscending, setIsAscending] = useState(true);

  const toggleSortOrder = () => {
    setIsAscending(!isAscending);
  };

  return (
    <Button
      onClick={toggleSortOrder}
      isIconOnly
      color="default"
      variant="ghost"
    >
      <FontAwesomeIcon
        icon={isAscending ? faSortAlphaUp : faSortAlphaDown}
        className="text-lg"
      />
    </Button>
  );
};

export default SortButton;
