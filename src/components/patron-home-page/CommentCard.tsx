import { CommentType } from "@/utils/types";
import { comment } from "postcss";

const CommentCard = ({ commentData }: { commentData: CommentType }) => {
  console.log("cemment deerh commentData", commentData);
  function getTimeDifference(postDate: Date): string {
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - postDate.getTime();

    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} day${days > 1 ? "s" : ""} `;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? "s" : ""} `;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? "s" : ""} `;
    } else {
      return "Just now";
    }
  }
  const postTime = getTimeDifference(new Date(commentData.createdAt));

  return (
    <div className="flex gap-4 ">
      <div className=" bg-red-300 h-[40px] w-[40px] rounded-full">
        <img
          src=""
          alt=""
          className="bg-red-300 h-[40px] w-[40px] rounded-full"
        />
      </div>
      <div className="flex flex-col gap-[7px] ">
        <p className="font-bold text-orange-200 text-lg">
          {commentData.patronId}
        </p>
        <p className="w-[250px] h-fit text-wrap wra bg-red-300">
          {commentData.text}
        </p>
        <p className="text-sm text-white text-opacity-50">{postTime}</p>
      </div>
    </div>
  );
};

export default CommentCard;
