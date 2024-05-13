"use client";
import * as React from "react";

import CreatorPostCard from "./CreatorPostCard";
import CreatorSubscribtionCard from "./CreatorSubscribtionCard";
import { PageDataType } from "@/utils/types";
import FilterSortSearch from "./FilterSortSearch";
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { motion } from "framer-motion";
const CreatorHome = ({ data }: { data: PageDataType }) => {
  const [filterValue, setFilterValue] = React.useState<string>("all");
  const [sortValue, setSortValue] = React.useState<string>("new to old");
  console.log("lLLLLLLLLL",data.subscriptions);
  return (
    <div className="text-white m-auto flex flex-col items-center">
      <p className="text-2xl mb-[40px]">Choose your membership</p>
      <Carousel className=" max-w-md px-12 py-16"

       plugins={[
        Autoplay({
          delay:5000,
        }),
      ]}>

        <CarouselContent className="-ml-0">
          {data?.tiers?.map((e, index) => (
            <CarouselItem key={index} className="pl-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <CreatorSubscribtionCard data={e} creatorName={data?.creator?.name} />
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="r-0"/>
        <CarouselNext  className="l-0"/>
      </Carousel>
      <div className="flex flex-col gap-[24px] mb-[30px] px-[16px]">
        <div className=" h-[72px]  text-white text-3xl font-medium leading-9">
          <p>Recent posts by</p>{" "}
          <p className="text-orange-200">{data?.creator?.name}</p>
        </div>
        <FilterSortSearch
          setFilterValue={setFilterValue}
          setSortValue={setSortValue}
        />
      </div>
      <div className="flex flex-col gap-[32px]">
        {filterValue == "all" &&
          data?.posts
            ?.sort((a: any, b: any) => {
              return sortValue == "new to old"
                ? new Date(b.createdAt).getTime() -
                    new Date(a.createdAt).getTime()
                : new Date(a.createdAt).getTime() -
                    new Date(b.createdAt).getTime();
            })
            .map((a, index) => {
              return (
                <CreatorPostCard
                  key={index}
                  data={a}
                  subscribed={data?.subscriptions}
                  creator={data?.creator.name}
                />
              );
            })}
        {data?.posts
          ?.sort((a: any, b: any) => {
            return sortValue == "new to old"
              ? new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime()
              : new Date(a.createdAt).getTime() -
                  new Date(b.createdAt).getTime();
          })
          .filter((e) => filterValue == e.contentType)

          .map((e, index) => (
            <CreatorPostCard
              key={index}
              data={e}
              subscribed={data?.subscriptions}
              creator={data?.creator.name}
            />
          ))}
      </div>

      <button className="w-[161px] h-[44px] my-[32px] bg-orange-50 rounded-lg text-neutral-700 text-base font-bold">
        See more posts
      </button>
    </div>
  );
};

export default CreatorHome;
