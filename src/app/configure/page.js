// This must be the very first line in your file, before any imports
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import CheckboxCard from "../../components/CheckboxCard";
import CheckboxImageCard from "../../components/CheckboxImageCard";
import { Button } from "@mantine/core";
import { Input } from "@mantine/core";

export default function Home() {
  const [selectedAreas, setSelectedAreas] = useState([]);
  const router = useRouter(); // Safe to use here after specifying "use client"

  const handleSelectionChange = (area) => {
    setSelectedAreas((prev) => {
      if (prev.includes(area)) {
        return prev.filter((item) => item !== area);
      } else {
        return [...prev, area];
      }
    });
  };

  const handleNextClick = () => {
    // router.push({
    //   href: "/source",
    //   query: { areas: selectedAreas.join(",") },
    // });
    router.push("/email", { areas: selectedAreas.join(",") });
  };

  return (
    <div className="flex flex-col justify-between px-10 pt-10 pb-16 mx-auto w-full text-base font-medium text-black bg-zinc-50 max-w-[480px] h-screen">
      <div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac3818d66149cbd650b96b9417c373066c9e795634642d5d03057179fd8e09a8?"
          className="self-center aspect-square w-[76px]"
        />
        <div className="mt-6 text-2xl mb-6">
          How frequently would you like to receive the newsletter?
        </div>
        <CheckboxCard
          title="Daily"
          onClick={() => handleSelectionChange("Daily")}
          checked={selectedAreas.includes("Daily")}
        />
        <CheckboxCard
          title="Weekly"
          onClick={() => handleSelectionChange("Weekly")}
          checked={selectedAreas.includes("Weekly")}
        />
        <CheckboxCard
          title="Monthly"
          onClick={() => handleSelectionChange("Monthly")}
          checked={selectedAreas.includes("Monthly")}
        />
      </div>
      <div className="gap-4">
        <Button
          fullWidth
          onClick={handleNextClick}
          className="items-center px-16 py-6 mb-7 mt-2  text-white whitespace-nowrap bg-indigo-500 rounded-2xl"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
