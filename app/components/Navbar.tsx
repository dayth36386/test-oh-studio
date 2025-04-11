import { NavLink } from "react-router";

import { cn } from "~/lib/utils";

export default function Navbar() {
  const dataNav = [
    {
      to: "/",
      name: "Home"
    },
    {
      to: "/profile",
      name: "Profile"
    },
    {
      to: "/contact",
      name: "Contact"
    },
    {
      to: "/qusetion",
      name: "Qusetion"
    }
  ];
  return (
    <div className="fixed z-10 w-full flex justify-center items-center p-10">
      <div className="bg-[#e8e5e480] flex rounded-full justify-center items-center p-1.5">
        {dataNav.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            className={({ isActive }) =>
              cn(
                "px-5 py-3 duration-300 ease-in font-light",
                isActive && "bg-white rounded-full"
              )
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
