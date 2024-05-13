import { MdIosShare } from "react-icons/md";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { CreatorType } from "@/utils/types";
const CreatorCard = ({data, postCount, memberCount}: {data: CreatorType, postCount: number, memberCount: number}) => {
  return (
    <div className="w-[390px]   relative ">
      <img
        className="w-[390px] h-[130px]"
        src={data?.coverPic}
      />
      <img
        className="w-[120px] h-[120px] left-[135px] top-[66px] absolute rounded-xl"
        src={data?.profilePic}
      />
      <div className=" left-[300px] top-[152px] absolute text-white flex  items-center">
        <MdIosShare />
      </div>
      <div className=" left-[335px] top-[152px] absolute text-white flex gap-3  items-center">
        <DotsHorizontalIcon />
      </div>
      <div className=" mt-[72px] mb-[42px] flex flex-col items-center text-white ">
        <p className="text-3xl font-medium"> {data?.name}</p>
        <p>{data?.bio}</p>
        <div className=" flex gap-[8px] text-white text-opacity-60">
          <p> {memberCount} members</p>
          <p>•</p>
          <p>{postCount} posts</p>
        </div>
        <button className="w-[220px] m-[18px] h-[44px] rounded-xl bg-orange-50  text-center text-neutral-700 text-base font-bold">
          Join for free
        </button>
        <div className="flex gap-[24px]">
          <button
            className="text-xl"
            onClick={() => {
              console.log("pressed X");
            }}
          >
            <FaXTwitter />
          </button>
          <button
            className="text-xl"
            onClick={() => {
              console.log("pressed IG");
            }}
          >
            <FaInstagram />
          </button>
        </div>
      </div>
    </div>
  );
};
export default CreatorCard;
