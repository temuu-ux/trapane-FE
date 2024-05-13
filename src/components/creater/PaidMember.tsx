"use client";
import { Button } from "../ui/button";
import { useState } from "react";
import { Membership } from "./Membership";

export const PaidMember = () => {
  const [change, setChange] = useState("");
  return (
    <div>
      {change == "Edit" ? (
        <Membership />
      ) : (
        <div className="w-[648px] flex flex-col gap-4">
          <h1 className="text-2xl font-medium text-[#252525] ">
            Paid membership tiers
          </h1>
          <div className="bg-[#FFFFFF] p-6 rounded-lg flex flex-col gap-4">
            <div>
              <p className="text-base font-medium text-[#252525] ">
                $5 / month
              </p>
              <p className="text-base font-light text-[#00000099]">0 members</p>
            </div>
            <p className="text-sm font-light text-[#00000099]">
              Access to exclusive content and more
            </p>
            <div className="flex justify-end">
              <Button
                className="w-6 h-5 "
                onClick={() => setChange("Edit")}
                variant={"ghost"}
              >
                Edit
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
