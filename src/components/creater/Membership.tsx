import { LuDollarSign } from "react-icons/lu";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

export const Membership = () => {
  return (
    <div className="w-[648px] flex flex-col gap-4 mb-20">
      <h1 className="text-2xl font-medium text-[#252525] ">
        Paid membership tiers
      </h1>
      <div className="bg-[#FFFFFF] p-6 rounded-lg flex flex-col gap-6">
        <div>
          <p className="text-sm font-medium text-[#252525] pb-2">Name</p>
          <Input className="rounded " type="text" placeholder="Tier Name" />
        </div>
        <div>
          <p className="text-sm font-medium text-[#252525] pb-2">
            Monthly price
          </p>
          <div className="flex items-center">
            <div className="border p-2 h-10 rounded rounded-r-none">
              <LuDollarSign className=" w-5 h-5" />
            </div>

            <Input
              className="rounded rounded-l-none"
              type="number"
              placeholder="5.00"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-[#252525] pb-2">
            Tier description
          </p>
          <Input
            className="h-[79px] pb-12 rounded"
            type="text"
            placeholder="Access to exclusive content and more"
          />
        </div>
        <div>
          <p className="text-sm font-medium text-[#252525] pb-2">
            Cover Image (optional)
          </p>
          <Input
            className="h-[79px] pb-12 rounded"
            type="text"
            placeholder="Access to exclusive content and more"
          />
          <p className="text-sm font-light text-[#00000099]">
            Recommended size: 460 by 200 pixels
          </p>
        </div>
      </div>
      <div className="flex justify-between ">
        <div className="gap-2 flex">
          <Button className="py-3 px-5">Save</Button>
          <Button variant={"outline"} className="bg-[#4B4B4B22] px-5 py-3">
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};
