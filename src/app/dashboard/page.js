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
    router.push("/source", { areas: selectedAreas.join(",") });
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
          We picked these sources for you.
        </div>
        <CheckboxImageCard
          title="HackerNews"
          onClick={() => handleSelectionChange("HackerNews")}
          description="Latest news about AI"
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Y_Combinator_logo.svg/640px-Y_Combinator_logo.svg.png"
          checked={selectedAreas.includes("HackerNewsAI")}
        />
        <CheckboxImageCard
          title="Product Hunt"
          onClick={() => handleSelectionChange("HackerNews")}
          description="Latest news about AI"
          imageSrc="https://static-00.iconduck.com/assets.00/product-hunt-icon-1024x1024-fn061r87.png"
          checked={selectedAreas.includes("HackerNewsAI")}
        />
      </div>
      <div className="gap-4">
        <Input variant="filled" className="mb-4" placeholder="Add new source" />
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
