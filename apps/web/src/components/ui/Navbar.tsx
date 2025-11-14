import React from "react";
import { ChevronDown } from "lucide-react";
export const Navbar = () => {
  return (
    <header className="w-full h-[53px] border-b border-border">
      <nav className="flex justify-between items-center h-full w-full max-w-[1500px] mx-auto">
        <div>
          <h1 className="font-semibold text-xl tracking-[-1.7px] select-none">
            EmbedKit
          </h1>
        </div>
        <div className="w-fit border border-border shadow shadow-neutral-200 py-1 pr-3 pl-1 rounded-lg flex items-center gap-x-1.5 cursor-pointer">
          <img
            src="https://avatars.githubusercontent.com/u/124599?v=4"
            className="size-8 rounded-full border border-neutral-400"
            alt=""
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-x-1">
              <p className="text-xs font-medium">Simon Jenkins</p>
              <ChevronDown className="size-3 text-neutral-500 shrink-0 mt-0.5" />
            </div>
            <p className="text-xs text-neutral-500 truncate">
              simonjen@ingress.com
            </p>
          </div>
        </div>
      </nav>
    </header>
  );
};
