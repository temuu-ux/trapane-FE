import { FaPatreon } from "react-icons/fa6";
import {
  IoIosChatbubbles,
  IoIosNotifications,
  IoMdSettings,
} from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { MdOutlinePayments, MdPeopleAlt } from "react-icons/md";
import { CgInsights } from "react-icons/cg";
import { Button } from "../ui/button";
import { IoCreate } from "react-icons/io5";
// import  Dropdown  from "./DropDown";
// import  DomDropDown  from "./DomDropDown";
import Dropdown from "@/components/creater/DropDown";
import DomDropDown from "@/components/creater/DomDropDown";

export const LeftBar = () => {
  const cateName = [
    { icon: <AiFillHome className="w-5 h-5" />, name: "Home" },
    { icon: <MdPeopleAlt className="w-5 h-5" />, name: "Audience" },
    { icon: <CgInsights className="w-5 h-5" />, name: "Insights" },
    { icon: <MdOutlinePayments className="w-5 h-5" />, name: "Payouts" },
    { icon: <IoIosChatbubbles className="w-5 h-5" />, name: "Community" },
    { icon: <IoIosNotifications className="w-5 h-5" />, name: "Notifications" },
    { icon: <IoMdSettings className="w-5 h-5" />, name: "Settings" },
  ];

  return (
    <div className="w-[249px]  bg-[#FFFFFF]">
      <div className=" flex flex-col  px-2 ">
        <div>
          <div className="py-6 px-4">
            <FaPatreon />
          </div>
          <div className="flex  justify-center  flex-col gap-3">
            {cateName.map((e, index) => (
              <div
                key={index}
                className="flex items-center gap-[12px] py-2 px-3 text-[#00000099] hover:bg-[#F5F5F5] hover:rounded-lg "
              >
                {e.icon}
                <p className="text-sm not-italic font-medium ">{e.name}</p>
              </div>
            ))}
            <Button variant={"outline"}>
              <div className="flex gap-2 ">
                <IoCreate className="w-5 h-5" />
                Create
              </div>
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center  pt-[625px] ">
          <Dropdown />
          <DomDropDown />
        </div>
      </div>
    </div>
  );
};
