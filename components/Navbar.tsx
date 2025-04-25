import { ModeToggle } from "@/components/ui/ModeToggle";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="px-5 py-3 bg-white dark:bg-gray-800  shadow-sm">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={50} height={50} />
        </Link>
        <div className="flex items-center gap-5 text-sm font-medium text-gray-700 dark:text-white">
          <Link href="/" className="hover:text-primary transition">
            Home
          </Link>
          <Link href="/favorites" className="hover:text-primary transition">
            Favorites
          </Link>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
