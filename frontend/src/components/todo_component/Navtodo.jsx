// import { NavbarData } from "../data/Navbar";
import { NavbarData } from "@/Tododata/Navbar";
import { NavLink } from "react-router-dom";

const Navtodo = () => {
  return (
    <div className="w-full h-[45px] flex justify-center items-center p-4 bg-gray-800 gap-x-5">
      {NavbarData.map((link, idx) => (
        <NavLink
          key={idx}
          to={link.path}
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-semibold text-xl"
              : "text-white font-medium text-xl"
          }
        >
          {link.title}
        </NavLink>
      ))}
      
    </div>
  );
};

export default Navtodo;

