import { useState } from "react";

import Sidebar from "../components/Sidebar";
import RepoCard from "../components/RepoCard";
import { LuRefreshCw } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <main
        className={`md:grid md:grid-cols-[1fr_6fr] h-screen ${
          isOpen ? "" : ""
        } `}
      >
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <section className="h-full">
          <header className="flex flex-col gap-1 p-4 md:flex-row md: justify-between border-b border-[#D5D7DA]">
            <div className="flex flex-col gap-1">
              <div className="text-[1.5rem]">Repositories</div>
              <div>33 total Repositories</div>
            </div>
            <div className="flex gap-2">
              <button className="flex gap-2 items-center border border-[#D5D7DA] p-2 rounded-md ">
                <LuRefreshCw /> Refresh all
              </button>
              <button className="flex gap-2 items-center border border-[#D5D7DA] bg-[#1570EF] text-white p-2 rounded-md ">
                <FiPlus />
                Add Repository
              </button>
            </div>
            <div className="flex items-center border border-[#D5D7DA] mt-2 p-1 rounded-md">
              <div className="scale-[1.5] px-2">
                <IoIosSearch />
              </div>
              <input
                type="text"
                placeholder="Search repositories"
                className="w-full p-2 focus:border-0 focus:outline-none"
              />
            </div>
          </header>

          <div className="">
            <RepoCard />
            <RepoCard />
            <RepoCard />
            <RepoCard />
            <RepoCard />
            <RepoCard />
          </div>
        </section>
      </main>
    </>
  );
}
