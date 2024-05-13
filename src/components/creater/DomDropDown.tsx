"use client";

import * as React from "react";

import { BsThreeDotsVertical } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const DomDropDown = () => {
  const [position, setPosition] = React.useState("bottom");
  const helper = [
    {
      name: "News",
      link: "#",
    },
    {
      name: "Creator Hub",
      link: "#",
    },
    {
      name: "Help center & FAQ",
      link: "#",
    },
    {
      name: "Feature Requests",
      link: "#",
    },
    {
      name: "Terms of Use",
      link: "#",
    },
    {
      name: "Privacy Policy",
      link: "#",
    },
    {
      name: "Community",
      link: "#",
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="border-none rounded-full">
        <Button variant="outline">
          <BsThreeDotsVertical className="w-5 h-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[248px] text-[#00000099] mr-96">
        <div className="border-b border-[#FFFFFF30]  px-4 py-3 text-[#00000099] ">
          <p className="text-[#000000] text-sm not-italic font-light py-3">
            Appearance
          </p>
          <div className="bg-[#F5F5F5] rounded-lg text-[#000000] text-sm font-semibold p-0.5">
            <button className="bg-[#FFFFFF30] focus:bg-[#FFFFFF] w-1/3 h-[42px] rounded-l-lg focus:rounded-lg">
              Light
            </button>
            <button className="bg-[#FFFFFF30] focus:bg-[#252525] focus:text-[#FFFFFF] w-1/3 h-[42px] focus:rounded-lg">
              Dark
            </button>
            <button className="bg-[#FFFFFF30] focus:bg-[#252525] focus:text-[#FFFFFF] w-1/3 h-[42px] rounded-r-lg focus:rounded-lg">
              System
            </button>
          </div>
        </div>
        <div className="px-4  text-[#000000] text-sm font-light not-italic py-2 border-b border-[#FFFFFF30]">
          {helper.map((e, index) => (
            <button
              key={index}
              className="py-2 hover:bg-[#FFFFFF30] w-full text-start rounded-lg "
            >
              <Link href={e.link}>
                <p className="px-2"> {e.name}</p>
              </Link>
            </button>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default DomDropDown;
