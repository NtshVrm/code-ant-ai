import { useState } from "react";
import RenderIcon from "./RenderIcon";

export default function MenuItem({
  menu,
  disablebg,
}: {
  menu: { id: number; icon: string; title: string }[];
  disablebg?: boolean;
}) {
  const [menuId, setMenuId] = useState(1);
  return (
    <>
      {menu.map((item) => (
        <div
          key={item.id}
          className={`${
            item.id == menuId ? "bg-[#1570EF] text-white" : "hover:bg-[#FAFAFA]"
          } p-2 mx-2 rounded-md flex items-center gap-2 cursor-pointer `}
          onClick={() => {
            !disablebg ? setMenuId(item.id) : "";
          }}
        >
          <RenderIcon icon={item.icon} />
          <p>{item.title}</p>
        </div>
      ))}
    </>
  );
}
