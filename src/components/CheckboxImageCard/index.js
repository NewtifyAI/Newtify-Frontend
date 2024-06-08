"use client";
import { useState } from "react";
import { Checkbox, Text, Image } from "@mantine/core";

export default function CheckboxImageCard({
  title,
  onClick,
  checked,
  imageSrc,
  description,
}) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (onClick) {
      onClick(!isChecked); // pass the new state back to parent component
    }
  };

  return (
    <div
      className="flex gap-2 items-center py-2 pr-2 pl-5 mt-2 bg-white rounded-2xl border-2 border-solid shadow-sm border-zinc-100"
      onClick={handleCheckboxChange}
    >
      <Checkbox
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="shrink-0 my-auto"
        styles={{
          input: {
            borderWidth: "2px",
            borderColor: "dedede",
            borderRadius: "50%", // Fully rounded borders
            width: "20px", // Adjust size as necessary
            height: "20px",
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
      <Image
        loading="lazy"
        src={imageSrc}
        className="shrink-0 w-7 h-7 aspect-square"
        alt={title}
      />
      <div className="flex-1 flex flex-col">
        <Text className="text-base text-black" style={{ fontSize: "0.9rem" }}>
          {title}
        </Text>
        <Text
          className="mt-2.5 text-xs text-neutral-500"
          style={{ color: "#6b7280", fontSize: "0.75rem" }}
        >
          {description}
        </Text>
      </div>
    </div>
  );
}
