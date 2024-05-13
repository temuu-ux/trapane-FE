import { LeftBar } from "@/components/creater/LeftBar";
import { RightPart } from "@/components/creater/RightPart";

const Dashboard = () => {
  return (
    <div className="w-screen flex  relative ">
      {/* <div className="z-50 top-0 fixed overflow-x-hidden">
        <LeftBar />
      </div> */}
      <div className="w-full">
        <RightPart />
      </div>
    </div>
  );
};
export default Dashboard;
