"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];
const Dropdown = () => {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="border-none  rounded-full p-6 w-32 "
      >
        <Button className="border-none" variant="outline">
          <div className="flex items-center gap-3">
            <img
              className="w-[32px] h-[32px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMp2QN2WCx7VRAXuJme-AcdxJJeXRSM3obFhXX_uIKvQ&s"
              alt=""
            />
            <div className="text-start">
              <h3 className="font-sm font-medium not-italic ">TiG</h3>
              <p className="text-xs font-light not-italic">Creator</p>
            </div>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[248px] mr-0 ">
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          <div className="flex items-center gap-3">
            <img
              className="w-8 h-8"
              src="https://deep-image.ai/blog/content/images/2022/09/underwater-magic-world-8tyxt9yz.jpeg"
              alt=""
            />
            <div className="text-start">
              <h3 className="font-sm font-medium not-italic ">TiG</h3>
              <p className="text-xs font-light not-italic">Creator</p>
            </div>
          </div>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
        >
          <div className="flex items-center gap-3">
            <img
              className="w-8 h-8 rounded-full"
              src="https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg"
              alt=""
            />
            <div className="text-start">
              <h3 className="font-sm font-medium not-italic ">Boldoo</h3>
              <p className="text-xs font-light not-italic">Member</p>
            </div>
          </div>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default Dropdown;
