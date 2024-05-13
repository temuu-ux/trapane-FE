import CreaterHomePosts from "./CreatorHomePosts";
import { PostRecieveType } from "@/utils/types";

export const Home = ({ data }: { data: PostRecieveType[] }) => {
  console.log("data66",data)
  return (
    <div>
      {data.map((e) => (
        <CreaterHomePosts data={e} />
      ))}
    </div>
  );
};
