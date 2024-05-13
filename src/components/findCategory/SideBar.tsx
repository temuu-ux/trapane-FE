"use client";
import * as React from "react";
import { useState } from "react";
import { FaPatreon } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { TextAlignJustifyIcon } from "@radix-ui/react-icons";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { BottomBar } from "./BottomBar";
export const SideBar = () => {
  const [change, setChange] = useState("");
  console.log("change", change);

  // const cateName = [
  // {
  //   logo: <BsStars className="w-5 h-5" />,
  //   name: "Recent",
  // },
  // {
  //   logo: <MagnifyingGlassIcon className="w-5 h-5" />,
  //   name: "Find creators",
  // },
  // {
  //   logo: <IoIosChatbubbles className="w-5 h-5" />,
  //   name: "Community",
  // },
  // {
  //   logo: <IoIosNotifications className="w-5 h-5" />,
  //   name: "Notifications",
  // },

  // ];
  return (
    <Drawer>
      <DrawerTrigger asChild>
        {/* <Button variant="outline"> */}
        <TextAlignJustifyIcon className="w-7 h-7 " />
        {/* </Button> */}
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full h-full max-w-sm">
          <div className="px-3">
            <DrawerHeader className="flex justify-between py-8 ">
              <FaPatreon className="text-white w-4 h-4" />
              <DrawerClose>
                <RxCross2 className="w-4 h-4" />
              </DrawerClose>
            </DrawerHeader>
          </div>

          <div className="flex flex-col gap-3 px-3">
            <div>
              {/* {cateName.map((e, index) => (
                <div
                  key={index}
                  className={`flex  items-center gap-1 px-3 py-3 hover:bg-[#FFFFFF30] hover:w-full hover:rounded-lg ${
                    change === e.name ? "text-[#FFFFFF]" : "text-[#FFFFFF99]"
                  }`}
                >
                  {e.logo}
                  <p
                    onClick={() => setChange(e.name)}
                    className="text-base font-meduim not-italic "
                  >
                    {e.name}
                  </p>
                </div>
              ))} */}
            </div>
            <div className="px-2 flex flex-col gap-2">
              <h3 className="text-sm not-italic font-meduim text-[#FFFFFF99]">
                Memberships
              </h3>
              <div className="flex gap-4 py-3 hover:bg-[#FFFFFF30] hover:w-full hover:rounded-lg px-2">
                <img
                  src="https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340"
                  alt=""
                  className="w-5 h-5 "
                />
                <p className="font-meduim text-base not-italic text-[#FFFFFF99]">
                  Drawfee
                </p>
              </div>
            </div>
            <div className="px-2 flex flex-col gap-2">
              <h3 className="text-sm not-italic font-meduim text-[#FFFFFF99] ">
                Recently Visited
              </h3>
              <div className="flex gap-4 py-3 hover:bg-[#FFFFFF30] hover:w-full hover:rounded-lg px-2">
                <img
                  src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                  alt=""
                  className="w-5 h-5"
                />
                <p className="font-meduim text-base not-italic text-[#FFFFFF99]">
                  Olga Gomes
                </p>
              </div>
              <div className="flex gap-4 py-3 hover:bg-[#FFFFFF30] hover:w-full hover:rounded-lg px-2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiAF872QO-O7Z0oN6F6EBTBnovpfD87l6OvibJXTk11g&s"
                  alt=""
                  className="w-5 h-5"
                />
                <p className="font-meduim text-base not-italic text-[#FFFFFF99]">
                  Design Details
                </p>
              </div>
            </div>
          </div>

          <DrawerFooter className="fixed bottom-0 border-t-2 w-[388px] ">
            <BottomBar />
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
