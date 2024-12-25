import { GrStorage } from "react-icons/gr";

export default function RepoCard() {
  return (
    <div className="flex flex-col border-b border-[#D5D7DA] p-4 gap-2 hover:bg-[#FAFAFA] cursor-pointer">
      <div className="flex gap-2 items-center">
        <div className="font-medium ">design-system</div>
        <div className="bg-[#B2DDFF] border border-[#B2DDFF] py-0.5 px-2 text-sm rounded-full text-[#1570EF] bg-opacity-30">
          Public
        </div>
      </div>
      <div className="flex gap-8 text-[#414651] text-sm">
        <div className="flex items-center gap-2">
          <div> React</div>{" "}
          <div className="w-2 h-2 bg-[#1570EF] rounded-full"></div>{" "}
        </div>
        <div className="flex items-center gap-2">
          <GrStorage />
          <p>7320 KB</p>{" "}
        </div>
        <div>Updated 1 day ago</div>
      </div>
    </div>
  );
}
