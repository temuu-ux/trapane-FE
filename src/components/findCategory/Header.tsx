import { LeftSideBar } from "@/components/findCategory/LeftSideBar";
import { SideBar } from "./SideBar";

export const Header = () => {
  return (
    // <div className="bg-[#252525] w-[390px]">
    <div className="w-[358px] text-white flex gap-5 p-3 justify-start text-center items-center">
      {/* <SideBar /> */}
      <LeftSideBar />
      <h1 className="text-lg not-italic font-medium">Find creators</h1>
    </div>
    // </div>
  );
};
