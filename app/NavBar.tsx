import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";
import {
  ArrowDownSquare,
  CircleArrowDown,
  Menu,
  MenuSquare,
  MoveDown,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="flex gap-18 bg-slate-100 h-22 p-2">
        <label htmlFor="nav" className="p-4 flex gap-2">
          <img
            src="/kawempe.jpg"
            className="w-10 h-10 rounded-lg"
            alt="Kawempe_Muslim_Secondary_School"
          />
          <p className="hidden lg:block font-bold text-xl pt-1">
            Kawempe Muslim Secondary School
          </p>

          <p className="sm:block lg:hidden font-bold text-xl pt-1">KMSS</p>
        </label>
        <ul className="hidden md:block p-4  lg:block  md:ml-10 lg:ml-40">
          <Link href="/">
            <li className="px-4 py-2 rounded-lg ml-4 cursor-pointer hover:bg-yellow-400 transition-all float-left">
              Home
            </li>
          </Link>
          <Link href="/about">
            <li className="px-4 py-2 rounded-lg ml-4 cursor-pointer hover:bg-yellow-400 transition-all float-left">
              About
            </li>
          </Link>
          <Link href="/academics">
            <li className="px-4 py-2 rounded-lg ml-4 cursor-pointer hover:bg-yellow-400 transition-all float-left">
              Academics
            </li>
          </Link>
          <Link href="/articles">
            <li className="px-4 py-2 rounded-lg ml-4 cursor-pointer hover:bg-yellow-400 transition-all float-left">
              Articles
            </li>
          </Link>
          <Link href="/gallery">
            <li className="px-4 py-2 rounded-lg ml-4 cursor-pointer hover:bg-yellow-400 transition-all float-left">
              Gallery
            </li>
          </Link>
        </ul>
        <div className="lg:hidden md:hidden m-5 block">
          <DropdownMenu>
            <DropdownMenuTrigger className="ml-40  p-1">
              <Menu className="w-6 h-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/">
                  <li className="px-4 py-2 rounded-lg ml-4 cursor-pointer  transition-all float-left">
                    Home
                  </li>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/about">
                  <li className="px-4 py-2 rounded-lg ml-4 cursor-pointer  transition-all float-left">
                    About Us
                  </li>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/academics">
                  <li className="px-4 py-2 rounded-lg ml-4 cursor-pointer  transition-all float-left">
                    Academics
                  </li>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/articles">
                  <li className="px-4 py-2 rounded-lg ml-4 cursor-pointer  transition-all float-left">
                    Articles
                  </li>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/gallery">
                  <li className="px-4 py-2 rounded-lg ml-4 cursor-pointer  transition-all float-left">
                    Gallery
                  </li>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
