import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface UserReviewProps {
  date: string;
  name: string;
  rating: number;
  reviewCounter: number;
  review: string;
}

function UserReview({
  date,
  name,
  rating,
  review,
  reviewCounter,
}: UserReviewProps) {
  return (
    <div className="h-[205px] border-2 border-gray-100 w-full flex items-center p-5 gap-5">
      <img
        src="https://placehold.co/100x100"
        alt=""
        className="rounded-full h-[100px] object-cover"
      />
      <main className="flex flex-col gap-2 w-3/4">
        <span className="text-tertiary font-light text-xs">{date}</span>
        <h6 className="text-primary font-bold">{name}</h6>
        <div className="mb-2">
          <span className="text-white text-xs mr-2 bg-secondary rounded-md p-1 ">
            <FontAwesomeIcon icon={faStar} /> {rating}
          </span>
          <span className="text-primary text-sm">{reviewCounter} reviews</span>
        </div>
        <span className="text-sm text-primary">{review}</span>
      </main>
    </div>
  );
}

export default UserReview;
