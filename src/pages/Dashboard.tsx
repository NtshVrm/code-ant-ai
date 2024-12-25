import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import RepoCard from "../components/RepoCard";
import { IoIosSearch } from "react-icons/io";
import MenuItem from "../components/MenuItem";
import RenderIcon from "../components/RenderIcon";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  const repoMenu = [
    {
      id: 1,
      icon: "refresh",
      title: "Refresh All",
    },
    {
      id: 2,
      icon: "add",
      title: "Add Repository",
    },
  ];

  const reposList = [
    {
      id: 1,
      title: "design-system",
      type: "Public",
      language: "React",
      size: 7320,
      lastUpdated: 1,
    },
    {
      id: 2,
      title: "codeant-ci-app",
      type: "Private",
      language: "JavaScript",
      size: 5871,
      lastUpdated: 2,
    },
    {
      id: 3,
      title: "analytics-dashboard",
      type: "Private",
      language: "Python",
      size: 4521,
      lastUpdated: 5,
    },
    {
      id: 4,
      title: "mobile-app",
      type: "Public",
      language: "Swift",
      size: 3096,
      lastUpdated: 3,
    },
    {
      id: 5,
      title: "e-commerce-platform",
      type: "Private",
      language: "Java",
      size: 6210,
      lastUpdated: 6,
    },
    {
      id: 6,
      title: "blog-website",
      type: "Public",
      language: "React",
      size: 7320,
      lastUpdated: 1,
    },
  ];

  return (
    <>
      <main
        className={`md:grid md:grid-cols-[1fr_6fr] h-screen md:bg-[#F5F5F5] ${
          isOpen ? "" : ""
        } `}
      >
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <section className="md:m-4 md:rounded-xl md:border bg-white">
          <header className="p-4 border-b border-[#D5D7DA] flex flex-col gap-2">
            <div className="flex flex-col gap-2 md:flex-row md:justify-between">
              <div className="flex flex-col gap-0.5">
                <div className="text-2xl font-medium">Repositories</div>
                <div className="text-sm text-[#414651]">
                  33 total repositories
                </div>
              </div>
              <div className="flex gap-2 h-fit text-sm">
                {repoMenu.map((item) => {
                  return (
                    <div
                      className={`flex gap-2 p-2 items-center border border-[#D5D7DA] rounded-md ${
                        item.id == 2 ? "bg-[#1570EF] text-white" : ""
                      }`}
                    >
                      <RenderIcon icon={item.icon} />
                      <p>{item.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex items-center border border-[#D5D7DA] mt-2 p-1 rounded-md md:w-2/5">
              <div className="scale-[1.5] px-2">
                <IoIosSearch />
              </div>
              <input
                type="text"
                placeholder="Search repositories"
                className="w-full px-2 py-1 focus:border-0 focus:outline-none"
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
