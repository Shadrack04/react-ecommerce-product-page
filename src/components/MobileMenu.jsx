import React from "react";

function MobileMenu() {
  const links = ["Collections", "Men", "Women", "About", "Contact"];
  return (
    <div className=" hidden fixed inset-0 bg-black bg-opacity-50">
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
