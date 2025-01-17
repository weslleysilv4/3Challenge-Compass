import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type CardTourTypeProps = {
  price: number;
  label: string;
  tourCount: number;
};

function CardTourType({ label, price, tourCount }: CardTourTypeProps) {
  return (
    <div className="w-[170px] h-[196px] border-2 border-gray-300 p-4">
      <div>
        <FontAwesomeIcon icon={faGlobe} size="2xl" className="text-secondary" />
      </div>
      <h3 className="font-bold mt-6 text-primary text-lg text-nowrap">
        {label}
      </h3>
      <span className="text-tertiary">{tourCount} Tours+</span>
      <div className="mt-6">
        <span className="text-tertiary">From</span>{" "}
        <span className="font-secondary text-secondary text-xl">${price}</span>
      </div>
    </div>
  );
}

export default CardTourType;
