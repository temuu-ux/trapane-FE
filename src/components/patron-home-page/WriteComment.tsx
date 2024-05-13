import { Send } from "lucide-react";
import { useState } from "react";
import { IoIosLink } from "react-icons/io";

const WriteComment = () => {
  const [value, setValue] = useState<string>("");

  const commentSend = async () => {
    const postData2 = {
      postId: "663af2dd9085953d08edacbe",
      patronId: "663af2dd9085953d08edacbe",
      text: value,
    };
    console.log(postData2, "postdata2");
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData2),
    };
    const fetched_data = await fetch(
      "https://trapane-back.vercel.app/api/comment/createComments",
      options
    );
    const response = await fetched_data.json();
  };

  return (
    <div className="relative ">
      <input
        aria-rowcount={10}
        aria-colcount={10}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        name="comment"
        className="w-[270px] placeholder:text-[13px] h-[38px] bg-neutral-800 border-[0.1px]  border-slate-300 rounded-md py-2 pl-9 pr-3 focus:outline-none focus:border-neutral-800 focus:ring-neutral-800"
        placeholder="Write a comment..."
        type="text"
      />
      {value !== "" && (
        <button
          onClick={() => {
            commentSend();
          }}
          className="absolute  inset-y-0 right-0 flex items-center pl-2 text-l"
        >
          <Send />
        </button>
      )}
    </div>
  );
};
export default WriteComment;
