import { today, getLocalTimeZone } from "@internationalized/date";
import { Button, DatePicker, Select, SelectItem } from "@nextui-org/react";
import { Minus, Plus } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";

interface BookContainerProps {
  price: number;
  duration: string;
  minAge: number;
  onBookNow?: () => void;
}

function BookContainer({
  price,
  duration,
  minAge,
  onBookNow,
}: BookContainerProps) {
  const [diary, setDiary] = useState(1);
  const [total, setTotal] = useState(0);
  const [adultTickets, setAdultTickets] = useState(0);
  const [kidTickets, setKidTickets] = useState(0);
  const [childTickets, setChildTickets] = useState(0);

  useEffect(() => {
    setTotal(
      diary * (adultTickets * price + kidTickets * price + childTickets * price)
    );
  }, [diary, adultTickets, kidTickets, childTickets, price]);

  const incrementTickets = (type: string) => {
    if (type === "adult") {
      setAdultTickets(adultTickets + 1);
    } else if (type === "kid" && minAge <= 12) {
      setKidTickets(kidTickets + 1);
    } else if (type === "child" && minAge <= 3) {
      setChildTickets(childTickets + 1);
    }
  };

  const decrementTickets = (type: string) => {
    if (type === "adult" && adultTickets > 0) {
      setAdultTickets(adultTickets - 1);
    } else if (type === "kid" && kidTickets > 0) {
      setKidTickets(kidTickets - 1);
    } else if (type === "child" && childTickets > 0) {
      setChildTickets(childTickets - 1);
    }
  };

  return (
    <div className="w-full h-full p-10 flex flex-col gap-5">
      <h2 className="text-md text-primary">
        <span className="font-bold text-4xl">${price}</span> / per person
      </h2>
      <hr />
      <div>
        <label htmlFor="date" className="text-primary font-bold">
          Date
        </label>
        <DatePicker
          defaultValue={today(getLocalTimeZone())}
          dateInputClassNames={{ inputWrapper: "rounded-md" }}
          classNames={{
            selectorButton: "order-first",
          }}
        />
      </div>
      <div>
        <label htmlFor="time" className="text-primary font-bold">
          Time
        </label>
        <Select
          placeholder="Select"
          aria-label="Select option"
          size="lg"
          onChange={(e) => setDiary(parseInt(e.target.value))}
        >
          {Array(parseInt(duration))
            .fill(null)
            .map((_, index) => (
              <SelectItem
                key={index + 1}
                textValue={`${index + 1} Day${index + 1 > 1 ? "s" : ""}`}
              >
                {index + 1} Day{index + 1 > 1 ? "s" : ""}
              </SelectItem>
            ))}
        </Select>
      </div>
      <section className="w-full h-full flex flex-col gap-2">
        <h6 className="font-bold">Ticket</h6>
        <div className="flex flex-row items-center justify-between">
          <p>Adults (18+ years)</p>
          <div className="flex items-center gap-1">
            <Button
              isIconOnly
              variant="bordered"
              size="sm"
              onClick={() => decrementTickets("adult")}
            >
              <Minus size={22} />
            </Button>
            <Button isDisabled isIconOnly variant="bordered" size="sm">
              {adultTickets}
            </Button>
            <Button
              isIconOnly
              variant="bordered"
              size="sm"
              onClick={() => incrementTickets("adult")}
            >
              <Plus size={22} />
            </Button>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <p>Kids (12+ years)</p>
          <div className="flex items-center gap-1">
            <Button
              isIconOnly
              variant="bordered"
              size="sm"
              onClick={() => decrementTickets("kid")}
              isDisabled={minAge > 12}
            >
              <Minus size={22} />
            </Button>
            <Button isDisabled isIconOnly variant="bordered" size="sm">
              {kidTickets}
            </Button>
            <Button
              isIconOnly
              variant="bordered"
              size="sm"
              onClick={() => incrementTickets("kid")}
              isDisabled={minAge > 12}
            >
              <Plus size={22} />
            </Button>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <p>Children (3+ years)</p>
          <div className="flex items-center gap-1">
            <Button
              isIconOnly
              onClick={() => decrementTickets("child")}
              variant="bordered"
              size="sm"
              isDisabled={minAge > 3}
            >
              <Minus size={22} />
            </Button>
            <Button isDisabled isIconOnly variant="bordered" size="sm">
              {childTickets}
            </Button>
            <Button
              isIconOnly
              onClick={() => incrementTickets("child")}
              isDisabled={minAge > 3}
              variant="bordered"
              size="sm"
            >
              <Plus size={22} />
            </Button>
          </div>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between my-3">
          <h6 className="font-bold">Total</h6>
          <p className="text-secondary font-bold">${total.toFixed(2)}</p>
        </div>
        <Button
          size="lg"
          className="w-full"
          color="secondary"
          onClick={onBookNow}
        >
          Book Now
        </Button>
      </section>
    </div>
  );
}

export default BookContainer;
