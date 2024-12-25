import logo from "../assets/logo.svg";
export default function Sidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
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
          close
        </div>
      </header>
      <aside
        className={`flex-grow flex flex-col absolute w-full top-0 left-0 z-50 transition-transform md:relative md:bg-white h-full bg-black bg-opacity-50 ${
          isOpen ? "translate-y-12" : "-translate-y-full md:translate-y-0"
        }`}
      >
        <div className="py-2 px-4 bg-white">
          <div className="relative">
            <select className="w-full border rounded p-2 pr-8 text-ellipsis overflow-hidden appearance-none">
              <option>UtkarshDhairyaPanwar</option>
              <option>Another User</option>
            </select>
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
              ▼
            </span>
          </div>
        </div>
        <nav className="flex flex-col md:justify-between flex-grow bg-white">
          <div className="flex flex-col gap-2">
            <p className="bg-[#1570EF] p-2 m-2 rounded-md text-white">
              Repositories
            </p>
            <p>AI Code Review</p>
            <p>Cloud Security</p>
            <p>How to Use</p>
            <p>Settings</p>
          </div>
          <div>
            <p>Support</p>
            <p>Logout</p>
          </div>
        </nav>
      </aside>
    </div>
  );
}
