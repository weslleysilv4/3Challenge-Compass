import React from "react";

type TravelCountersProps = {
  counter?: string;
  label?: string;
};

function TravelCounters({ counter, label }: TravelCountersProps) {
  return (
    <div className="flex flex-row items-center gap-2">
      <h1 className="font-secondary font-bold text-4xl">{counter}</h1>
      <span>{label}</span>
    </div>
  );
}

export default TravelCounters;
