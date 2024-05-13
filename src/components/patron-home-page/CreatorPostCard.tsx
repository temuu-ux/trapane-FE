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
import Link from "next/link";
import { cn } from "@/utils/cn";

import { PostRecieveType, PostType } from "@/utils/types";
import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import WriteComment from "./WriteComment";
import { FaLock } from "react-icons/fa";

export function CreatorPostCard({
  data,
  subscribed,
  creator,
}: {
  data: PostRecieveType;
  subscribed: boolean;
  creator: string;
}) {
  console.log("LLLLLLLLLL");
  const [like, setLike] = useState<string | null>("cornflowerblue");
  const [comment, setComment] = useState<string>("closed");
  const [count, setCount] = useState<number>(data.likes.length);

  useEffect(() => {
    if (!data.likes.includes(localStorage.getItem("token") || "")) {
      setLike("");
    }
  }, [count]);
  console.log("subscribed", subscribed);
  const likedData = {
    _id: data._id,
    creatorId: data.creatorId,
    title: data.title,
    bodyText: data.bodyText,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
    likes: data.likes,
    comments: data.comments,
  };

  async function pressLike() {
    if (like == "") {
      data.likes.push(localStorage.getItem("token") || "");
      setLike("cornflowerblue");
      setCount(count + 1);
    }
    if (like == "cornflowerblue") {
      likedData.likes = data.likes.filter(
        (el) => el != localStorage.getItem("token")
      );
      setLike("");
      setCount(count - 1);
    }

    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(likedData),
    };

    const fetched_data = await fetch(
      "https://trapane-back.vercel.app/api/post/updatePost",
      options
    );

    const response = await fetched_data.json();
  }

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
  const postTime = getTimeDifference(new Date(data?.createdAt));

  return (
    <div className="flex flex-col gap-4 relative">
      <Card className="w-[353px] bg-neutral-800 text-white">
        <div className="relative">
          {data.contentType == "video" && (
            <ReactPlayer
              url={data.videoURL}
              controls={subscribed}
              width={"100%"}
            ></ReactPlayer>
          )}
          {data.contentType == "image" && (
            <img
              src={data?.imageURL}
              className={cn(!subscribed && "blur-sm")}
              alt="Post Image"
            />
          )}
          {/* {!subscribed && !(data.contentType === "text") && (
            <div className="absolute top-0 left-0 w-full h-full bg-neutral-700 bg-opacity-50 rounded flex items-center justify-center flex-col">
              <FaLock color={"#A8A8A8"} className="mb-4" />
              <Link
                href="/subscribe"
                className="bg-neutral-700 hover:bg-neutral-800 text-white font-bold py-2 px-4 rounded"
              >
                Subscribe
              </Link>
            </div>
          )} */}
        </div>
        <CardHeader>
          <div className="absolute top-0 left-0 w-full h-full bg-neutral-700 bg-opacity-50 rounded flex items-center justify-center flex-col">
            <FaLock color={"#A8A8A8"} className="mb-4" />
            <Link
              href={`/payment/${creator}`}
              className="bg-neutral-700 hover:bg-neutral-800 text-white font-bold py-2 px-4 rounded"
            >
              Subscribe
            </Link>
          </div>
          <p className="font-semibold text-[22px]"> {data?.title}</p>
          <div className=" text-white text-opacity-60">
            <p>{postTime}</p>
          </div>
        </CardHeader>
        {subscribed && (
          <>
            <CardContent className="flex flex-col justify-center">
              <p>{data.bodyText}</p>
              <DotsHorizontalIcon />
            </CardContent>
            <CardFooter className="flex flex-col  gap-4 items-start text-#A8A8A8">
              <div className="flex gap-4">
                <div className="flex gap-1 ">
                  <button onClick={pressLike}>
                    <AiFillLike color={`${like}`} />
                  </button>
                  <p>{count}</p>
                </div>
                <div className="flex gap-1">
                  <button
                    onClick={() => {
                      if (comment == "closed") {
                        setComment("open");
                      } else {
                        setComment("closed");
                      }
                    }}
                  >
                    <FaComment />
                  </button>
                  <p>{data.comments.length}</p>
                </div>
              </div>
              {comment == "open" && (
                <div className="w-[full] flex flex-col gap-[25px]">
                  {data.comments.map((a) => {
                    return <CommentCard commentData={a} />;
                  })}
                  <WriteComment />
                </div>
              )}
            </CardFooter>
          </>
        )}
      </Card>
    </div>
  );
}

export default CreatorPostCard;
