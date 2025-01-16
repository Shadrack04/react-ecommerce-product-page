import React from "react";

function Nav() {
  const links = ["Collections", "Men", "Women", "About", "Contact"];
  return (
    <nav className="hidden sm:flex">
      <ul className=" hover:text-stone-400 mt-1 flex flex-col sm:flex-row gap-4">
        {links.map((name) => (
          <NavLink key={name} name={name} />
        ))}
      </ul>
    </nav>
  );
}

function NavLink({ name }) {
  return (
    <li className=" hover:text-black text-l font-medium group">
      <a className=" relative " href="#">
        {name}
        <span className=" absolute top-9 bg-[hsl(26_100%_55%)] w-0 h-0.5 origin-center left-1/2 group-hover:left-0 transition-all duration-300 group-hover:w-full"></span>
      </a>
    </li>
  );
}

export default Nav;
