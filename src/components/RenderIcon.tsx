import { MdLogout } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import {
  IoCallOutline,
  IoCloudOutline,
  IoCodeSlashOutline,
} from "react-icons/io5";
import { LuBookText, LuRefreshCw } from "react-icons/lu";
import { GoGear } from "react-icons/go";
import { FiPlus } from "react-icons/fi";

export default function RenderIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "home":
      return <AiOutlineHome />;
    case "code":
      return <IoCodeSlashOutline />;
    case "cloud":
      return <IoCloudOutline />;
    case "docs":
      return <LuBookText />;
    case "settings":
      return <GoGear />;
    case "call":
      return <IoCallOutline />;
    case "logout":
      return <MdLogout />;
    case "refresh":
        return <LuRefreshCw />;
    case "add":
        return <FiPlus />;
  }
}
