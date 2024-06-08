// This must be the very first line in your file, before any imports
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import CheckboxCard from "../../components/CheckboxCard";
import CheckboxImageCard from "../../components/CheckboxImageCard";
import { Button } from "@mantine/core";
import { Input } from "@mantine/core";

import {
  IconPhoto,
  IconDownload,
  IconArrowRight,
  IconPlus,
} from "@tabler/icons-react";

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
    <div className="flex flex-col px-7 pt-14 mx-auto w-full bg-zinc-50 max-w-[480px] h-screen">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac3818d66149cbd650b96b9417c373066c9e795634642d5d03057179fd8e09a8?"
        className="self-center aspect-square w-[76px] mt-10"
      />
      <div className="self-center text-xl mt-6 font-medium text-black">
        You&apos;re All Set!
      </div>
      <div className="self-center text-sm mt-4 font-normal text-grey">
        You&apos;ll receive your newsletter every week!
      </div>
    </div>
  );
}
