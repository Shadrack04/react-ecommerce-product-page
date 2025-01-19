import React, { useContext } from "react";

function MobileMenu({ isOpenNav, setIsOpenNav }) {
  const links = ["Collections", "Men", "Women", "About", "Contact"];
  return (
    <div
      onClick={() => setIsOpenNav(false)}
      style={
        isOpenNav
          ? { transform: "translate(0%)" }
          : { opacity: 1, transform: "translateX(-100%)" }
      }
      className=" fixed inset-0 bg-black bg-opacity-50 transition-all duration-300 z-40"
    >
      <nav className=" fixed inset-[0_35%_0_0] bg-white px-6 py-16">
        <ul className=" flex flex-col gap-4">
          {links.map((name) => (
            <NavLink key={name} name={name} />
          ))}
        </ul>
      </nav>
    </div>
  );
}

function NavLink({ name }) {
  return (
    <li className=" text-xl font-semibold">
      <a href="#">{name}</a>
    </li>
  );
}

export default MobileMenu;
