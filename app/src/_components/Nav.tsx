import React from "react";
import { navs } from "../data/data";
import Link from "next/link";
import { House } from "lucide-react";
const Nav = () => {
  return (
    <nav id="nav" className="hidden md:flex justify-between gap-4">
      {navs.map((nav) => (
        <ul key={nav.id}>
          <li>
            <Link href={nav.link}>
              {nav.name === "home" ? <House className="w-4 h-4" /> : nav.name}
            </Link>
          </li>
        </ul>
      ))}
    </nav>
  );
};

export default Nav;
