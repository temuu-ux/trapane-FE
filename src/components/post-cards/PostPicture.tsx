"use client";
import { useFormik } from "formik";
import { Toaster } from "@/components/ui/toaster";
import * as React from "react";
import { IoIosLink } from "react-icons/io";
import { Button } from "../ui/button";
import { useState } from "react";
import ReactPlayer from "react-player";
import { useToast } from "../ui/use-toast";

const PostVideo = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const CLOUD_NAME = "ddjvbrkfd";
  const UPLOAD_PRESET = "rveu2hld";

  const uploadVideo = async (file: File): Promise<string> => {
    const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`;
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);
    formData.append("cloud_name", CLOUD_NAME);

    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(
        `Error uploading video: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

    return data.secure_url;
  };
  const uploadHandler = async () => {
    if (imageFile) {
      setLoading(true);
      try {
        const url = await uploadVideo(imageFile);
        setImageUrl(url);
        console.log("Video uploaded successfully:", url);
      } catch (error) {
        console.error("Error uploading video:", error);
      }
    } else {
      console.log("No video file selected");
    }
    setLoading(false);
  };
  const handleChange = (e: any) => {
    if (e.target.files[0] && e.target.files.length > 0) {
      setImageFile(e.target.files[0]);
    }
  };

  const { toast } = useToast();
  const formik = useFormik({
    initialValues: {
      creatorId: localStorage.getItem("creatorToken"),

      imageURL: imageUrl,
      title: "",
      bodyText: "",
    },
    onSubmit: async (values) => {
      setImageUrl(values.imageURL);
      const postData2 = {
        creatorId: localStorage.getItem("creatorToken"),
        title: values.title,
        bodyText: values.bodyText,
        imageURL: imageUrl,
        videoURL: "",
        likes: [],
        contentType: "image",
        createdAt: new Date(),
        updatedAt: new Date(),
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
    <div className="pt-[70px] w-[616px] flex flex-col items-center justify-center gap-[20px] ">
      <p>Create image post</p>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col items-start ">
          <div className="relative ">
            <span className="absolute  inset-y-0 left-0 flex items-center pl-2">
              <IoIosLink className="text" />
            </span>
            <input
              onChange={(e) => {
                setImageUrl(e.target.value);
              }}
              name="imageURL"
              className="w-[600px] placeholder:text-[13px] max-w-full h-[38px] bg-neutral-800 border-[0.1px]  border-slate-300 rounded-md py-2 pl-9 pr-3 focus:outline-none focus:border-neutral-800 focus:ring-neutral-800"
              placeholder="Type or paste image URL"
              type="text"
            />
          </div>
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
              className="bg-neutral-900 text-white text-[13px] w-full placeholder:text-[13px] focus:outline-none focus:border-neutral-800 focus:ring-neutral-800"
            />
          </div>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs mb-[20px]"
            name="video"
            onChange={handleChange}
          />
          <Button className="mb-[20px]" type="button" onClick={uploadHandler}>
            Upload
          </Button>
        </div>

        <Toaster />
        {loading && (
          <div className="w-screen h-screen absolute left-0 flex justify-center items-center bg-black opacity-50 top-0 ">
            <p className="text-white">Loading...</p>
          </div>
        )}
        <div className="mb-[30px]">
          {imageUrl && <img src={imageUrl} className="mb-[30px]" />}
        </div>
        <Button type="submit" variant="secondary">
          Publish
        </Button>
      </form>
    </div>
  );
};
export default PostVideo;
