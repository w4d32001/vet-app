import React from "react";
import { Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex justify-between py-2 h-16 shadow-green-900/10 shadow-xl">
      <div className="flex gap-x-10 items-center px-4">
        <Link href="/" className="flex gap-x-2"><Image src="/logo.svg" alt="logo" width={30} height={30} />
          <span className="flex items-center gap-x-1 font-mono"> 
            <span className="text-primary text-2xl">N</span>
            <span className="text-white">e</span>
            <span className="text-white">x</span>
            <span className="text-white">t</span>
          </span>
        </Link>
        <div className="relative text-white">
          <input
            type="search"
            className="py-2 pr-4 pl-8 rounded-xl outline-none bg-secondary-100 shadow-lg"
          />
          <Search width={1} className="w-6 h-6 absolute top-2 left-1 " />
        </div>
      </div>
      <div className="px-4">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
