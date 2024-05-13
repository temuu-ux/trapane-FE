import { error } from "console";
import { Button } from "../ui/button";
import { CreatorType } from "@/utils/types";
import Link from "next/link";
const CreatorBigCard = ({ data }: { data: CreatorType }) => {
  // console.log("zurag", data.name);
  // `localhost:3000/creator/${data.name}`

  return (
    <div>
      <Link href={`creator/${data.name}`}>
        <div className="flex flex-col gap-2 p-4 rounded-lg border">
          {data.profilePic != "https://via.placeholder.org/150" || "" ? (
            <img
              style={{ backgroundSize: `"100%"` }}
              className="w-[350px] h-[250px] rounded-lg bg-auto relative "
              src={data.profilePic}
              alt=""
            />
          ) : (
            <img
              style={{ backgroundSize: `"100%"` }}
              className="w-[350px] h-[250px] rounded-lg bg-auto relative "
              src="meme.webp"
              alt=""
            />
          )}

          <div>
            <h2 className="text-base font-medium text-[#FFFFFF] not-italic">
              {data.name}
            </h2>
            <p className="font-light text-sm not-italic text-[#FFFFFF]">
              {data.bio}
            </p>
            <p className="text-[#FFFFFF99] font-light text-sm not-italic">
              {6} members
            </p>
          </div>
          <Button
            className="absolute mt-[195px] ml-4 px-4 py-2 "
            variant={"secondary"}
          >
            subscribe
          </Button>
        </div>
      </Link>
    </div>
  );
};
export default CreatorBigCard;
