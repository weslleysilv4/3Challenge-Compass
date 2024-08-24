import { Button, Slider } from "@nextui-org/react";
import React, { useState } from "react";

function SliderFilter() {
  const [value, setValue] = useState<number>(0);
  return (
    <div className="p-7 bg-[#F7F8FA]">
      <h6 className="text-primary font-bold text-lg">Filter By</h6>
      <div className="flex flex-col gap-2 w-full max-w-md">
        <Slider
          size="sm"
          step={5}
          formatOptions={{ style: "currency", currency: "USD" }}
          color="secondary"
          maxValue={1500}
          onChange={(e) => setValue(e)}
          minValue={0}
          defaultValue={120}
          className="max-w-md"
        />
        <div className="flex justify-between">
          <p>${value}</p>
          <p className="font-bold">$ 1500.00</p>
        </div>
      </div>
      <Button color="secondary" className="mt-2">
        Submit
      </Button>
    </div>
  );
}

export default SliderFilter;
