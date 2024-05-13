import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { TierType, TierWithIdType } from "@/utils/types";

const PaymentTierCard = ({
  data,
  selectTier,
}: {
  data: TierWithIdType;
  selectTier: (tier: TierWithIdType) => void;
}) => {
  const [show, setShow] = useState("h-[48px]");

  useEffect(() => {}, []);

  return (
    <div className="w-[340px]  bg-neutral-800 rounded-[12px] border-orange-50 flex flex-col gap-[12px]">
      <img
        className="w-[340px] h-[152.22px] relative rounded-t-[12px]"
        src={data.imageURL}
        alt={data.title}
      />
      <div className="p-[16px] flex flex-col gap-[12px]">
        <p className="text-white text-[22px] font-medium leading-7">
          {data.title}
        </p>
        <div className=" text-white flex items items-end ">
          <p className="text-2xl font-medium ">${data.price}</p>
          <p className="text-base font-light ">/ month</p>
        </div>
        <button
          className="h-[44px] bg-orange-50 rounded-lg text-neutral-700 text-base font-bold"
          onClick={() => selectTier(data)}
        >
          Select
        </button>
        <div className={`w-full ${show} overflow-clip`}>
          <p>{data.desc}</p>
        </div>
        <div className="w-fit h-[22.85px] pb-[0.48px] rounded justify-center gap-[3.80px] inline-flex">
          <button
            onClick={() => {
              if (show == "h-[48px]") setShow("h-fit");
              else setShow("h-[48px]");
            }}
            className="text-center flex items-center gap-[6px] text-orange-100 text-base font-bold "
          >
            {show == "h-[48px]" && "Show more"}
            {show == "h-fit" && "Show less"}
            {show == "h-[48px]" && <IoIosArrowDown />}
            {show == "h-fit" && <IoIosArrowUp />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentTierCard;