import React from "react";
import Link from "next/link";
import Nav from "./Nav";
import Sci from "./Sci";
import SearchForm from "./SearchForm";
import SheetItem from "./SheetItem";
import Image from "next/image";
const Header = () => {
  return (
    <header className="flex w-full px-20 mx-auto items-center justify-between p-5 bg-slate-200">
      <Link href="/">
        <Image src="/assets/img/logo.svg" alt="logo" width={100} height={100} />
      </Link>
      <Nav />
      <div className="flex items-center gap-2">
        <Sci />
        <SearchForm />
        <div>
          <SheetItem />
        </div>
      </div>
    </header>
  );
};

export default Header;
