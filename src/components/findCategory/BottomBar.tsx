import * as React from "react";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";

export const BottomBar = () => {
  
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="flex gap-3 items-center">
          <img
            className="w-9 h-9 rounded-full"
            src="https://deepai.org/static/images/cyberpunkdolphin.png"
            alt=""
          />
          <div>
            <h3 className="text-[#FFFFFF]">Hanna Baki</h3>
            <p className="text-sm font-light not-sr-only text-[#FFFFFF99]">
              Member
            </p>
          </div>
        </div>
      </DrawerTrigger>
      <DrawerContent className="top-[700px]">
        <div className="mx-auto w-full max-w-sm  ">
          <DrawerHeader className="border-b border-[#FFFFFF30]">
            <DrawerTitle className="text-[#FFFFFF] text-sm not-italic font-light py-3 ">
              Create on Patreon
            </DrawerTitle>
          </DrawerHeader>
          <div className="border-b border-[#FFFFFF30] w-[358px] px-4 py-3 ">
            <p className="text-[#FFFFFF] text-sm not-italic font-light py-2">
              Appearance
            </p>
            <div className="bg-[#FFFFFF30] rounded-lg text-[#FFFFFF] p-0.5">
              <button className="bg-[#FFFFFF30] focus:bg-[#252525] w-1/3 h-[42px] rounded-l-lg focus:rounded-lg">
                Light
              </button>
              <button className="bg-[#FFFFFF30] focus:bg-[#252525] w-1/3 h-[42px] focus:rounded-lg">
                Dark
              </button>
              <button className="bg-[#FFFFFF30] focus:bg-[#252525] w-1/3 h-[42px] rounded-r-lg focus:rounded-lg">
                System
              </button>
            </div>
          </div>
          
          <DrawerFooter className="w-[358px]">
            <button className="py-1 hover:bg-[#FFFFFF30] w-full text-start rounded-lg ">
              <Link href={"#"}>
                <p className="px-2 py-1 text-[#FFFFFF] text-sm font-light not-italic">
                  Log out
                </p>
              </Link>
            </button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
