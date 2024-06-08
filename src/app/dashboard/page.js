// This must be the very first line in your file, before any imports
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import CheckboxCard from "../../components/CheckboxCard";
import CheckboxImageCard from "../../components/CheckboxImageCard";
import { Button } from "@mantine/core";
import { Input } from "@mantine/core";
import { Loader } from "@mantine/core";

import {
  IconPhoto,
  IconDownload,
  IconArrowRight,
  IconPlus,
} from "@tabler/icons-react";

export default function Home() {
  const [selectedAreas, setSelectedAreas] = useState([]);
  const router = useRouter(); // Safe to use here after specifying "use client"
  const [isLoading, setIsLoading] = useState(false);

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
    // router.push("/finished");
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/finished");
    }, 3000);
  };

  return (
    <div className="flex flex-col px-7 pt-14 mx-auto w-full bg-zinc-50 max-w-[480px]">
      <div className="self-center text-xl font-medium text-black">
        Customise your Newsletter
      </div>
      <div className="flex gap-4 mt-5">
        <div className="flex flex-col flex-1 items-start px-6 py-5 font-medium text-white bg-indigo-400 rounded-3xl border-2 border-solid shadow-sm border-zinc-100">
          <img
            loading="lazy"
            srcSet="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678116-calendar-512.png"
            className="rounded-md aspect-square w-[27px]"
          />
          <div className="mt-4 text-m">9th June</div>
          <div className="mt-2 text-xs">#42 Newsletter</div>
        </div>
        <div className="flex flex-col flex-1 items-start px-4 py-5 text-xs bg-white rounded-3xl border-2 border-solid shadow-sm border-zinc-100 text-neutral-500">
          <img
            loading="lazy"
            srcSet="https://static-00.iconduck.com/assets.00/product-hunt-icon-1024x1024-fn061r87.png"
            className="aspect-square w-[31px]"
          />
          <div className="mt-2.5 text-base font-medium text-black">
            Product Hunt
          </div>
          <div className="mt-2.5 font-medium">
            <span className="font-bold">31 </span>new launches
          </div>
          {/* <div className="mt-4 font-bold">Trending:</div>
          <div className="mt-2">Notion.AI</div>
          <div className="mt-2">Relevance.AI</div>
          <div className="mt-2">Perplexity</div> */}
        </div>
      </div>
      <div className="flex flex-col py-5 pr-2 pl-6 mt-4 w-full bg-white rounded-3xl border-2 border-solid shadow-sm border-zinc-100">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ac3818d66149cbd650b96b9417c373066c9e795634642d5d03057179fd8e09a8?"
          className="rounded-md aspect-square w-[27px]"
        />
        <div className="mt-3.5 text-base font-medium text-black">
          Daily Summary
        </div>
        <div className="mt-6 text-xs font-medium text-neutral-500">
          • Students confident human skills will prevail over AI in workforce.{" "}
          <br />• Nvidia&apos;s Jensen Huang leads AI boom, dubbed &quot;Taylor
          Swift of Tech.&quot; <br />• AI privacy debates, tech workers
          upskilling, and AI assistant capabilities tested.
        </div>
        <div className="mt-8 text-xs font-medium text-neutral-500">Sources</div>
        <div className="flex gap-1.5 self-start mt-2">
          {" "}
          <img
            loading="lazy"
            srcSet="https://static-00.iconduck.com/assets.00/product-hunt-icon-1024x1024-fn061r87.png"
            className="shrink-0 w-4 aspect-square"
          />
          <img
            loading="lazy"
            srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Y_Combinator_logo.svg/640px-Y_Combinator_logo.svg.png"
            className="shrink-0 w-4 aspect-square"
          />
          <img
            loading="lazy"
            srcSet="https://upload.wikimedia.org/wikipedia/commons/4/41/BBC_Logo_2021.svg"
            className="shrink-0 my-auto aspect-[3.45] w-[34px]"
          />
        </div>
      </div>
      <div className="flex flex-col py-6 pr-2 pl-6 mt-6 text-xs font-medium bg-white rounded-3xl border-2 border-solid shadow-sm border-zinc-100">
        <img
          loading="lazy"
          srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Y_Combinator_logo.svg/640px-Y_Combinator_logo.svg.png"
          className="aspect-square w-[27px]"
        />
        <div className="mt-3 text-stone-300">Recommended Reading</div>
        <div className="mt-2 text-base text-black">
          AI&apos; Role in Tomorrow&apos;s Workforce:{" "}
        </div>
        <div className="mt-5 text-neutral-500">
          Ravin Jesuthasan discussed AI&apos;s impact on work at the Milken
          Institute Global Conference, emphasizing its role in reshaping skills,
          enhancing transparency, and fostering growth. He advocated for
          inclusive, sustainable strategies and highlighted the need for
          continuous education and adaptive leadership to navigate the evolving
          technological landscape effectively.
        </div>
      </div>
      <Button
        variant="light"
        className="mt-4 mb-16"
        rightSection={<IconPlus size={14} />}
      >
        New Section
      </Button>
      <Button
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000, // Ensure it floats above all other content
        }}
        // leftSection={<IconPhoto size={14} />}
        leftSection={isLoading ? <Loader size={12} color="white" /> : <></>}
        rightSection={<IconArrowRight size={14} />}
        onClick={() => handleNextClick()}
      >
        Finish
      </Button>
    </div>
  );
}
