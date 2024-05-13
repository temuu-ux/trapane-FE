import { FaSearch } from "react-icons/fa";
import { HiOutlineBarsArrowDown } from "react-icons/hi2";
import { MdFilterList } from "react-icons/md";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";

const FilterSortSearch = ({
  setFilterValue,
  setSortValue,
}: {
  setFilterValue: React.Dispatch<React.SetStateAction<string>>;
  setSortValue: (value: string) => void;
}) => {
  return (
    <div className="flex gap-[8px] items-center ">
      <div className="w-[44px] h-[44px] rounded-lg border  border-white border-opacity-25 justify-center items-center">
        <Select onValueChange={setFilterValue}>
          <SelectTrigger className="w-full border-none bg-neutral-900 text-[500px] ">
            <MdFilterList />
          </SelectTrigger>
          <SelectContent className="bg-none">
            <SelectGroup>
              <SelectLabel>Post types</SelectLabel>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="video">Video</SelectItem>
              <SelectItem value="image">Picture</SelectItem>
              <SelectItem value="text">Text</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="w-[44px] h-[44px] rounded-lg border  border-white border-opacity-25 justify-center items-center ">
        <Select onValueChange={setSortValue}>
          <SelectTrigger className="border-none bg-neutral-900 text-[500px]">
            <HiOutlineBarsArrowDown className="w-[44px] h-[44px]" />
          </SelectTrigger>
          <SelectContent className="bg-none">
            <SelectGroup>
              <SelectLabel>Sort by date</SelectLabel>
              <SelectItem value="new to old">New to old</SelectItem>
              <SelectItem value="old to new">Old to new</SelectItem>
              <SelectItem value="likes">Likes</SelectItem>
              <SelectItem value="comments">Comments</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <label className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <FaSearch className="text-opacity-60 text-white" />
        </span>
        <input
          className="placeholder:text-[15px] placeholder:text-white placeholder:text-opacity-60 w-[262px] h-[40px] bg-neutral-800 rounded-md py-2 pl-9 pr-3 focus:outline  "
          placeholder="Search posts"
          type="text"
        />
      </label>
    </div>
  );
};

export default FilterSortSearch;
