import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortAlphaDown,
  faSortAlphaUp,
} from "@fortawesome/free-solid-svg-icons";

interface SortButtonProps {
  onClick: (isAscending: boolean) => void; // Adicione onClick com a assinatura correta
}

const SortButton = ({ onClick }: SortButtonProps) => {
  const [isAscending, setIsAscending] = useState(true);

  const toggleSortOrder = () => {
    const newSortOrder = !isAscending;
    setIsAscending(newSortOrder);
    onClick(newSortOrder); // Passe o novo valor para a função onClick
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
