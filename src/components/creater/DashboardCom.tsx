"use client";
import { useState } from "react";
import { Home } from "@/components/creater/Home";
import { About } from "@/components/creater/About";
import { PaidMember } from "@/components/creater/PaidMember";
import { PostRecieveType } from "@/utils/types";

export const DashboardCom = ({ data }: { data: PostRecieveType[] }) => {
  const [change, setChange] = useState("Home");

  return (
    <div className="flex flex-col items-center justify-center gap-10 bg-[#F5F5F5]">
      <div className="flex gap-10 border-b-2  justify-center w-full ">
        <button onClick={() => setChange("Home")} className="">
          Home
        </button>
        <button onClick={() => setChange("Membership")}>Membership</button>
        <button onClick={() => setChange("About")}>About</button>
      </div>
      <div className="flex justify-center items-center">
        {change == "Home" && <Home data={data} />}
        {change == "Membership" && <PaidMember />}
        {change == "About" && <About />}
      </div>
    </div>
  );
};
