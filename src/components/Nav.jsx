import React from "react";

function Nav() {
  const links = ["Collections", "Men", "Women", "About", "Contact"];
  return (
    <nav className="hidden sm:flex  bg-blue-400 px-6 py-16">
      <ul className=" flex flex-col gap-4">
        {links.map((name) => (
          <NavLink key={name} name={name} />
        ))}
      </ul>
    </nav>
  );
}

function NavLink({ name }) {
  return (
    <li className=" text-xl font-semibold">
      <a href="#">{name}</a>
    </li>
  );
}

export default Nav;
