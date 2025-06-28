import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

// More styled version to match your colorful cards
export function MyDatePicker({ onDateSelect, initialDate }) {
  const [selected, setSelected] = useState(initialDate || new Date());

  const handleSelect = (date) => {
    setSelected(date);
    if (onDateSelect) {
      onDateSelect(date);
    }
  };

  return (
    <div className="h-full w-full rounded-2xl  p-6 flex flex-col items-center justify-center text-black">
      <div className="text-center  mb-4">
        {/* <h3 className="text- font-bold mb-2">Select Date</h3> */}
        {/* <p className="text-xl">When would you like to meet?</p> */}
      </div>
      
      <div className=" bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]  transition-all border-2 duration-300 text-black rounded-xl p-4 shadow-none">
        <DayPicker
          className="--rdp-accent-color: black"
          mode="single"
          selected={selected}
          onSelect={handleSelect}
          disabled={{ before: new Date() }}
          footer={
            selected ? (
              <div className="text-center mt-2  font-medium">
                Selected: {selected.toLocaleDateString()}
              </div>
            ) : (
              <div className="text-center mt-2 text-black">
                Pick a day
              </div>
            )
          }
        />
      </div>
    </div>
  );
}
