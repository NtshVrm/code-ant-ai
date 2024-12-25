import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo.svg";
import { MdClose } from "react-icons/md";
import MenuItem from "./MenuItem";
import { IoChevronDownOutline } from "react-icons/io5";

export default function Sidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const primaryMenu = [
    {
      id: 1,
      icon: "home",
      title: "Repositories",
    },
    {
      id: 2,
      icon: "code",
      title: "AI Code Review",
    },
    {
      id: 3,
      icon: "cloud",
      title: "Cloud Security",
    },
    {
      id: 4,
      icon: "docs",
      title: "How to Use",
    },
    {
      id: 5,
      icon: "settings",
      title: "Settings",
    },
  ];

  const secondaryMenu = [
    {
      id: 6,
      icon: "call",
      title: "Support",
    },
    {
      id: 7,
      icon: "logout",
      title: "Logout",
    },
  ];

  return (
    <div className="flex flex-col border-r border-[#D5D7DA] bg-white">
      <header className="flex justify-between p-4">
        <div className="flex gap-2 items-center text-xl">
          <img src={logo} alt={"logo"} className={`w-6`} />
          <div>CodeAnt AI</div>
        </div>
        <div
          className="md:hidden"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <MdClose /> : <GiHamburgerMenu />}
        </div>
      </header>
      <aside
        className={`flex-grow flex flex-col absolute w-full top-0 left-0 z-50 transition-transform md:relative md:bg-white h-full bg-black bg-opacity-50 ${
          isOpen ? "translate-y-12" : "-translate-y-full md:translate-y-0"
        }`}
      >
        <div className="py-2 px-4 bg-white">
          <div className="relative">
            <select className="w-full border rounded p-2 pr-8 text-ellipsis overflow-hidden appearance-none focus:outline-none">
              <option>Max Emilian Verstappen</option>
              <option>Monica Konduru</option>
            </select>
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <IoChevronDownOutline />
            </span>
          </div>
        </div>
        <nav className="flex flex-col md:justify-between flex-grow ">
          <div className="flex flex-col gap-2 bg-white">
            <MenuItem menu={primaryMenu} />
          </div>
          <div className="bg-white">
            <MenuItem menu={secondaryMenu} disablebg={true} />
          </div>
        </nav>
      </aside>
    </div>
  );
}
