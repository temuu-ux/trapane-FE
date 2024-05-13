"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import CreatorBigCard from "./CreatorBigCard";
import { CreatorType } from "@/utils/types";
export const SuggestedCreaters = () => {
  const [creators, setCreators] = useState<CreatorType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      //   const response = await fetch("https://trapane-back.vercel.app/api/creator/", {
      //     method: "GET",
      //     headers: { "Content-Type": "application/json" },
      //   }).then((res) => res.json());
      //   setCreators(response.creators);
      //   console.log("response", response);
      //   console.log(creators);
      try {
        const response = await fetch(
          "https://trapane-back.vercel.app/api/creator/getCreators",
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();

        setCreators(jsonData);
        console.log("response", jsonData);
      } catch (error) {}
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col gap-10  ">
      <div className="flex  items-center justify-between">
        <h1 className="text-lg not-italic font-medium text-white ">
          Suggested creators
        </h1>
      </div>
      <div className="flex flex-col gap-5 ">
        {creators?.map((creator, index) => {
          return <CreatorBigCard data={creator} key={index} />;
        })}
      </div>
      <div className="flex justify-center ">
        <Button className="bg-[#FFFFFF30] w-[210px] ">
          See more suggestions
        </Button>
      </div>
    </div>
  );
};
