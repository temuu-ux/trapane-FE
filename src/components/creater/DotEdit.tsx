"use client";
import React, { useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PostRecieveType } from "@/utils/types";
import { EditModal } from "@/components/creater/EditModal";

export const DotEdit = ({ data }: { data: PostRecieveType }) => {
  // const [hidden, setHidden] = useState(false);
  const deleteHandler = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://trapane-back.vercel.app/api/post/deletePost",
        {
          method: "DELETE",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ _id: data._id }),
        }
      );
      const dataDelete = await response.json();
      console.log("deleteData", dataDelete);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="border-none">
            <HiDotsHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-0 flex">
          <div className="flex flex-col">
            <Button onClick={deleteHandler}>Delete</Button>{" "}
            <EditModal data={data} />
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
