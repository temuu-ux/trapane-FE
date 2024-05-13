"use client";
import { FaComment } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";

import ReactPlayer from "react-player";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { DotEdit } from "@/components/creater/DotEdit";
import { PostRecieveType } from "@/utils/types";
import { useState } from "react";

const CreaterHomePosts = ({ data }: { data: PostRecieveType }) => {
  console.log("data5", data);
  const [commentModal, setCommentModal] = useState("hidden");

  function getTimeDifference(postDate: Date): string {
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - postDate.getTime();

    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else {
      return "Just now";
    }
  }
  const postTime = getTimeDifference(new Date(data.createdAt));

  return (
    <div className="flex flex-col  py-3">
      <Card className="w-[648px] shadow-md text-[#000000]">
        <div className="rounded-lg p-4">
          {data.imageURL != "" && <img src={data.imageURL} alt="" />}

          {data.videoURL ? (
            <ReactPlayer
              url={data.videoURL}
              controls
              width={"100%"}
            ></ReactPlayer>
          ) : (
            " "
          )}
        </div>

        <CardHeader>
          <p className="font-semibold text-[22px] "> {data.title}</p>

          <div className=" text-[#666666] text-opacity-60">
            <p>{postTime}</p>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col justify-center">
          <p>{data.bodyText}</p>
          <DotsHorizontalIcon />
        </CardContent>
        <CardFooter className="flex gap-4 items-center text-center justify-between text-[#666666] text-opacity-60">
          <div className="flex gap-4 items-center text-center text-opacity-60">
            <div className="flex gap-1 ">
              <button>
                <AiFillLike />
              </button>
              <p>{data.likes}</p>
            </div>
            <div
              className="flex gap-1 "
              onClick={() => {
                setCommentModal("");
              }}
            >
              <button>
                <FaComment />
              </button>
              <p>{data.comments.length}</p>
            </div>
          </div>

          <DotEdit data={data} />
        </CardFooter>
      </Card>
    </div>
  );
};

export default CreaterHomePosts;
