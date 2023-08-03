import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="">
      <span className="flex text-slate-200 items-center gap-14">
        <Link className="flex items-center gap-4" href="/">
          <Image src="/logo.svg" height={32} width={32} alt="logo" />
          <span className="text-slate-200 font-bold">Data Globe</span>
        </Link>

        <div className="flex gap-8">
          <Link href="/" className="hover:opacity-70">
            Home
          </Link>
          <Link href="/" className="hover:opacity-70">
            Learn More
          </Link>
        </div>
      </span>
    </nav>
  );
};

export default Nav;
