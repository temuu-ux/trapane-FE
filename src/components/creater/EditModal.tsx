import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Label } from "@/components/ui/label";
import { PostRecieveType, PostType } from "@/utils/types";
import { useToast } from "../ui/use-toast";
import { useFormik } from "formik";
import { useEffect } from "react";

export const EditModal = ({ data }: { data: PostRecieveType }) => {
  const { toast } = useToast();
  // console.log("rfetbgfhn", data);
  const formik = useFormik({
    initialValues: {
      title: data?.title,
      question: data?.bodyText,
      img: data.imageURL,
    },
    onSubmit: async (values) => {
      const postData: PostType = {
        _id: data._id,
        creatorId: data.creatorId,
        title: values.title,
        bodyText: values.question,
        imageURL: "",
        videoURL: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        likes: [],
        comments: [],
        contentType: "text",
      };
      console.log(postData);
      console.log("value", values);

      const res = await fetch(
        "https://trapane-back.vercel.app/api/post/updatePost",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      );
      const response = await res.json();
      console.log(response);
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-sm w-16 " variant={"ghost"}>
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your post here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        {/* <Toaster /> */}
        <form onSubmit={formik.handleSubmit}>
          {" "}
          <div className="gap-4 flex flex-col justify-start">
            <div className="flex justify-center items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <input
                name="title"
                className="font-normal w-full rounded-md focus:outline-none flex h-10 border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 "
                placeholder="Title"
                type="text"
                value={formik.values.title}
                onChange={formik.handleChange}
              />
            </div>
            <div className="flex justify-center items-center gap-4">
              <Label htmlFor="text" className="text-right">
                Text
              </Label>
              <input
                placeholder="Text"
                name="question"
                type="text"
                id=""
                value={formik.values.question}
                typeof="text"
                onChange={formik.handleChange}
                className="font-normal w-full rounded-md focus:outline-none flex h-10 border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-slate-400  focus-visible:ring-offset-2 "
              />
            </div>
            <div className=" flex justify-center items-center gap-1">
              <Label htmlFor="Image" className="text-right">
                Image
              </Label>
              <input
                placeholder="Image"
                name="Image"
                type="text"
                id="Image"
                value={formik.values.img}
                typeof="text"
                onChange={formik.handleChange}
                className=" font-normal w-full rounded-md focus:outline-none flex h-10 border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-slate-400  focus-visible:ring-offset-2"
              />
            </div>
          </div>
          <Button
            // onClick={async () => {
            //   toast({
            //     description: "Your message has been sent.",
            //   });
            //   onSubmit();
            // }}
            type="submit"
            variant="secondary"
          >
            Publish
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
