"use client";
import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RxDotsHorizontal } from "react-icons/rx";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export const OptionDrop = () => {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          {" "}
          <div className="p-[10px] rounded-lg  bg-[#4B4B4B22] text-[#383838]">
            <RxDotsHorizontal className="w-5 h-5" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[218px] p-4 ">
        <DropdownMenuLabel className="font-light">Edit page</DropdownMenuLabel>
        <DropdownMenuLabel className="font-light">
          Manage posts
        </DropdownMenuLabel>
        <DropdownMenuLabel className="font-light">
          View drafts
        </DropdownMenuLabel>
        <DropdownMenuLabel className="font-light">Edit tiers</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="text-[#000000] text-base">
          View as:
        </DropdownMenuLabel>
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
          className="font-light"
        >
          Creater
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
          className="font-light"
        >
          Paid Member
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
