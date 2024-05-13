"use client";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { CiFacebook } from "react-icons/ci";
import { FaTwitch } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";
import { SuggestedCreaters } from "./SuggestedCreaters";
import * as React from "react";
import { useState } from "react";
import { Header } from "./Header";

export const FindCreaters = () => {
  const [cate, setCate] = useState("");


  const category = [
    { name: "Art" },
    { name: "Podcast" },
    { name: "Music" },
    { name: "Games" },
    { name: "Writing" },
    { name: "Photography" },
    { name: "Video" },
  ];

  return (
    <div className="bg-[#252525] w-[390px]">
      <Header />
      <Command className=" px-4  bg-[#000000]  shadow-md py-3 gap-14">
        <div>
          <div className="text-[#FFFFFF]  border border-[#FFFFFF42] h-10 items-center rounded-full flex px-4 text-center">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <CommandInput
              className=" p-3"
              placeholder="Search creators or topics"
              // value={cate}
            />
          </div>
          <CommandList>
            <CommandGroup heading="">
              <div className="flex flex-wrap gap-2 ">
                {category.map((e, index) => (
                  // <CommandItem  className="bg-[#000000]">
                  <div className="#FFFFFF30">
                    <Button key={index} onClick={() => setCate(e.name)}>
                      {e.name}
                    </Button>
                  </div>
                ))}
              </div>
            </CommandGroup>
            <CommandSeparator />
          </CommandList>
        </div>

        <SuggestedCreaters />
      </Command>
    </div>
  );
};
