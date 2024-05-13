import { IoMdEye } from "react-icons/io";
import { Button } from "../ui/button";
import { BiSolidRocket } from "react-icons/bi";

export const Header = () => {
  return (
    <div className="flex justify-between  bg-[#EBEBEB] p-4 items-center">
      <p className=" text-[#000] text-sm font-light not-italic">
        Your page is not yet published
      </p>
      <div className="flex gap-4 ">
        <Button className="bg-[#00000017] text-[#000000] flex gap-2 p-4">
          <IoMdEye className="w-5 h-5" />
          Preview page
        </Button>
        <Button className="flex gap-2 p-4 ">
          <BiSolidRocket className="w-5 h-5" />
          Publish page
        </Button>
      </div>
    </div>
  );
};
