"use client";
import { useState } from "react";
import { Checkbox, Text } from "@mantine/core";

export default function CheckboxCard({ title, onClick, checked }) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={`flex gap-5 px-5 py-6 mt-4 whitespace-nowrap bg-white rounded-2xl border-2 border-solid shadow-sm border-zinc-100 hover:bg-gray-50 active:bg-gray-100 ${
        isChecked ? "border-blue-300" : ""
      }`}
      onClick={handleCheckboxChange}
    >
      <Checkbox
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="shrink-0"
        styles={{
          input: {
            borderWidth: "2px",
            borderColor: "dedede",
            borderRadius: "50%", // Fully rounded borders
            width: "20px", // Adjust size as necessary
            height: "20px",
            // boxShadow: "0px 0px 0px 1px black", // Outer border shadow to create clean edge
            backgroundColor: isChecked ? "#3182ce" : "#fff",
            "&:checked": {
              backgroundColor: "#3182ce",
              borderColor: "#3182ce",
            },
            "&:not(:checked)": {
              backgroundColor: "#fff",
            },
          },
        }}
      />
      <Text className="flex-auto my-auto">{title}</Text>
    </div>
  );
}
