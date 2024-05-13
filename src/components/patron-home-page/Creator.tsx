"use client";
import { useEffect, useState } from "react";
import CreatorAbout from "./CreatorAbout";
import CreatorCard from "./CreatorCard";
import CreatorCollection from "./CreatorCollection";
import CreatorHome from "./CreatorHome";

import { PageDataType } from "@/utils/types";
const Creator = ({ data }: { data: PageDataType }) => {
  const [select, setSelect] = useState("Home");
  console.log("datallllllll", data);
  return (
    <div className="dark:bg-neutral-900 bg-white w-[390px] flex flex-col items-center">
      <CreatorCard
        data={data?.creator}
        postCount={data?.posts?.length}
        memberCount={data?.subscriptionCount}
      />
      <div className=" mb-[60px] text-white w-full h-10 pl-4 pr-[15.80px] justify-center items-center gap-8 inline-flex border-b-[1px] border-zinc-700">
        <button
          onClick={() => {
            setSelect("Home");
          }}
          className="w-[44.36px] h-[23px] text-white  text-base font-medium  focus:border-b-[1px] focus:text-orange-100 "
        >
          Home
        </button>
        <button
          onClick={() => {
            setSelect("Collections");
          }}
          className="w-[85.47px] h-[23px] text-white text-base font-medium  focus:border-b-[1px] focus:text-orange-100 "
        >
          Collections
        </button>
        <button
          onClick={() => {
            setSelect("About");
          }}
          className="w-[45.04px] h-[23px] text-white text-base font-medium  focus:border-b-[1px] focus:text-orange-100 "
        >
          About
        </button>
      </div>
      <div className="w-[390px] flex justify-center">
        {select == "Home" && <CreatorHome data={data} />}
        {select == "Collections" && <CreatorCollection />}
        {select == "About" && <CreatorAbout />}
      </div>
    </div>
  );
};
export default Creator;
