import { useState } from "react";

import Sidebar from "../components/dashboard/Sidebar";
import RepoCard from "../components/dashboard/RepoCard";
import RepoListHeader from "../components/dashboard/RepoListHeader";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

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
      language: "HTML/CSS",
      size: 1876,
      lastUpdated: 4,
    },
    {
      id: 7,
      title: "social-network",
      type: "Private",
      language: "PHP",
      size: 5432,
      lastUpdated: 7,
    },
    {
      id: 8,
      title: "component-library",
      type: "Public",
      language: "TypeScript",
      size: 4570,
      lastUpdated: 9,
    },
  ];

  return (
    <>
      <main
        className={`md:grid md:grid-cols-[1fr_6fr] h-screen md:bg-bgGray `}
      >
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <section className="md:m-4 md:rounded-xl md:border bg-white overflow-scroll hidden-scrollbar">
          <RepoListHeader />
          <div className="">
            {reposList.map((repoItem, index) => {
              return (
                <RepoCard
                  key={repoItem.id}
                  repoItem={repoItem}
                  lastItem={reposList.length - 1 == index ? true : false}
                />
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
