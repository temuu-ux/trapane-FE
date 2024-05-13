"use client";
import PostPicture from "@/components/post-cards/PostPicture";

import PostText from "@/components/post-cards/PostText";
import PostVideo from "@/components/post-cards/PostVideo";
import { useState } from "react";

const CreatePostsModal = () => {
  const [select, setSelect] = useState("video");
  return (
    <div className=" w-fit h-fit m-auto px-[50px] p-[50px] rounded-xl bg-neutral-900 text-white flex flex-col  items-center">
      <div className="flex gap-[20px]">
        <button
          className={`${
            select == "video" ? "border-white" : "border-neutral-900"
          } hover:border-white  border-[0.1px] rounded-sm px-[4px]`}
          onClick={() => {
            setSelect("video");
          }}
        >
          Video
        </button>
        <button
          className={`${
            select == "picture" ? "border-white" : "border-neutral-900"
          }
          focus:border-white  hover:border-white border-[0.1px] rounded-sm px-[4px]`}
          onClick={() => {
            setSelect("picture");
          }}
        >
          Picture
        </button>
        <button
          className={`
          ${select == "text" ? "border-white" : "border-neutral-900"}
          focus:border-white hover:border-white border-neutral-900 border-[0.1px] rounded-sm px-[4px]`}
          onClick={() => {
            setSelect("text");
          }}
        >
          Text
        </button>
      </div>
      {select == "video" && <PostVideo />}
      {select == "picture" && <PostPicture />}
      {select == "text" && <PostText />}
    </div>
  );
};
export default CreatePostsModal;
