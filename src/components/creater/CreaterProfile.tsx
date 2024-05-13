"use client";
import React, { useState } from "react";
import { IoColorPaletteSharp } from "react-icons/io5";
import { TiAttachmentOutline } from "react-icons/ti";
import { Button } from "../ui/button";
import { IoIosCreate } from "react-icons/io";
import { TbShare2 } from "react-icons/tb";
import { OptionDrop } from "@/components/creater/OptionDrop";
import { DashboardCom } from "@/components/creater/DashboardCom";
import Link from "next/link";
import { useEffect } from "react";
import { CreatorType, PostRecieveType } from "@/utils/types";
import { log } from "console";
import CreatePostsModal from "../post-cards/CreatePostsModal";
import { X } from "lucide-react";

export const CreateProfile = () => {
  const [creater, setCreater] = useState<CreatorType>({} as CreatorType);
  const [postData, setPostData] = useState<PostRecieveType[]>([]);
  const [postOpen, setPostOpen] = useState<string>("hidden");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://trapane-back.vercel.app/api/creator/dashboard",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              creatorId: localStorage.getItem("creatorToken"),
            }),
          }
        );
        // console.log(response);
        const data = await response.json();
        setCreater(data.creator);
        setPostData(data.posts);
        console.log("post data 123", postData);
        console.log("hi Data", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  console.log("postData", postData);
  console.log("creator", creater);

  return (
    <div className="min-h-screen bg-[#F5F5F5] ">
      <div className="h-[570px] relative z-10 ">
        {creater?.coverPic ? (
          <img
            className="h-full w-full object-fill"
            style={{ backgroundSize: `100%`, backgroundRepeat: `no-repeat` }}
            src={creater?.coverPic}
            alt=""
          />
        ) : (
          <div className="bg-[#FDAF7B] h-full w-full"></div>
        )}
      </div>
      <div className="flex text-[#FFFFFF] justify-center  items-center ">
        <div className="flex flex-col items-center text-center p-4 ">
          <img src={creater?.profilePic} alt="" className="w-28 h-28  z-50 " />
          <div className="text-[#00000099] text-sm font-light not-italic pb-4 ">
            <h2 className="text-[#252525] font-medium not-italic text-xl mt-3">
              {creater?.name}
            </h2>

            <p>Add headline</p>
            <p className="flex items-center gap-1">
              <TiAttachmentOutline /> patreon.com/tig631
            </p>
          </div>
        </div>
        <div className="flex top-[590px] right-0 gap-2 absolute">
          <Button
            onClick={() => {
              if (postOpen == "hidden") {
                setPostOpen("open");
              }
            }}
            className="flex gap-1 font-bold"
          >
            <IoIosCreate className="w-5 h-5" />
            <p> Create</p>
          </Button>
          <div className="p-[10px] rounded-lg h-full bg-[#4B4B4B22] text-[#383838] ml-1">
            <TbShare2 className="w-5 h-5" />
          </div>
          <OptionDrop />
        </div>
      </div>
      <div className="w-full  ">
        <div className=" m-auto relative w-fit">
          {postOpen == "open" && <CreatePostsModal />}
          {postOpen == "open" && (
            <button
              onClick={() => {
                setPostOpen("hidden");
              }}
              className="text-white  w-[20px] h-[20px] absolute right-[50px] bottom-[50px]"
            >
              <X />
            </button>
          )}
        </div>
      </div>
      <DashboardCom data={postData} />
    </div>
  );
};
