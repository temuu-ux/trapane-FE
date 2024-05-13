"use client";
import * as React from "react";
import { useState } from "react";
import { FaPatreon } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { BottomBar } from "./BottomBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TextAlignJustifyIcon } from "@radix-ui/react-icons";

// const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;

// type SheetSide = (typeof SHEET_SIDES)[number];

export function LeftSideBar() {
  const [change, setChange] = useState("");
  console.log("change", change);
  return (
    <div className="grid grid-cols-2 gap-2">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="bg-[#252525]">
            <TextAlignJustifyIcon className="w-7 h-7 " />
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-black/8" side={"left"}>
          <div className="p-6">
            <SheetHeader>
              <SheetTitle>
                <FaPatreon className="text-white w-4 h-4" />
              </SheetTitle>
              {/* <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription> */}
            </SheetHeader>
            <div className="grid gap-4 py-4 ">
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
              {/* <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div> */}
            </div>
          </div>
          <SheetFooter className="fixed bottom-2 border-t-2 w-[384px] p-0 ">
            {/* <SheetClose asChild> */}
              <div className="px-6 py-4">
                {" "}
                <BottomBar />
              </div>
            {/* </SheetClose> */}
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
