"use client";
import { useFormik } from "formik";
import { Toaster } from "@/components/ui/toaster";
import * as React from "react";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

import { PostType } from "@/utils/types";
const PostVideo = () => {
  const { toast } = useToast();
  const formik = useFormik({
    initialValues: {
      creatorId: localStorage.getItem("creatorToken"),
      videoURL: "",
      title: "",
      bodyText: "",
    },
    onSubmit: async (values) => {
      const postData2 = {
        creatorId: localStorage.getItem("creatorToken"),
        title: values.title,
        bodyText: values.bodyText,
        videoURL: "",
        imageURL: "",
        likes: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        comments: [],
      };
      console.log(postData2, "postdata2");
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData2),
      };

      const fetched_data = await fetch(
        "https://trapane-back.vercel.app/api/post/createPost",
        options
      );
      const response = await fetched_data.json();
    },
  });

  return (
    <div className="pt-[70px] w-[616px] flex flex-col items-center justify-center gap-[20px] pb-[300px]">
      <p>Create text post</p>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col items-start ">
          <input
            onChange={formik.handleChange}
            className="mt-[50px] mb-[15px] placeholder:text-[20px] text-[20px] w-full  bg-neutral-900  border-neutral-900 rounded-md   focus:outline-none  "
            placeholder="Add a title"
            type="text"
            name="title"
          />
          <div className=" w-full">
            <textarea
              onChange={formik.handleChange}
              placeholder="Ask your members a question."
              name="bodyText"
              id=""
              className="bg-neutral-900 text-white text-[13px] w-full placeholder:text-[13px] focus:outline-none focus:border-neutral-800 focus:ring-neutral-800  mb-[30px]"
            />
          </div>
        </div>
        <Toaster />
        <Button type="submit" variant="secondary">
          Publish
        </Button>
      </form>
    </div>
  );
};
export default PostVideo;
