import { GrStorage } from "react-icons/gr";

export default function RepoCard({
  repoItem,
  lastItem,
}: {
  repoItem: {
    id: number;
    title: string;
    type: string;
    language: string;
    size: number;
    lastUpdated: number;
  };
  lastItem: boolean;
}) {
  return (
    <div
      className={`flex flex-col  ${
        lastItem ? "" : "border-b"
      }  border-[#D5D7DA] p-4 gap-2 hover:bg-[#FAFAFA] cursor-pointer`}
    >
      <div className="flex gap-2 items-center">
        <div className="font-medium ">{repoItem.title}</div>
        <div className="bg-[#B2DDFF] border border-[#B2DDFF] py-0.5 px-2 text-sm rounded-full text-[#1570EF] bg-opacity-30">
          {repoItem.type}
        </div>
      </div>
      <div className="flex gap-8 text-[#414651] text-sm">
        <div className="flex items-center gap-2">
          <div>{repoItem.language}</div>{" "}
          <div className="w-2 h-2 bg-[#1570EF] rounded-full"></div>{" "}
        </div>
        <div className="flex items-center gap-2">
          <GrStorage />
          <p>{repoItem.size} KB</p>{" "}
        </div>
        <div>
          Updated {repoItem.lastUpdated}{" "}
          {repoItem.lastUpdated > 1 ? "days" : "day"} ago
        </div>
      </div>
    </div>
  );
}
