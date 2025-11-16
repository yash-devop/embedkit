import { ChevronDown, LogOut } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../features/auth/hooks/hooks";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/Button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { getInitials } from "../lib/utils";
export const Navbar = () => {
  const { signOut, userSession } = useAuth();

  const navigate = useNavigate();
  const MAX_WIDTH = "192px";

  const userName = getInitials(userSession?.data?.user?.name ?? "");

  return (
    <header className="w-full h-[53px] border-b border-border">
      <nav className="flex justify-between items-center h-full w-full max-w-[1500px] mx-auto">
        <div>
          <h1 className="font-semibold text-xl tracking-[-1.7px] select-none">
            EmbedKit
          </h1>
        </div>
        {userSession.data?.session ? (
          <Popover>
            <PopoverTrigger asChild>
              <div
                style={{
                  width: MAX_WIDTH,
                }}
                className="border border-border shadow shadow-neutral-200 py-1 pr-3 pl-1 rounded-lg flex items-center gap-x-1.5 cursor-pointer"
              >
                <Avatar className="rounded-lg">
                  <AvatarImage
                    src={userSession.data.user.image as string}
                    alt={userName}
                    className="size-8 rounded-full border border-neutral-500"
                  />
                  <AvatarFallback className="text-xs text-primary font-medium">
                    {userName}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <div className="flex items-center gap-x-1">
                    <p className="text-xs font-medium">
                      {userSession.data.user.name}
                    </p>
                    <ChevronDown className="size-3 text-neutral-500 shrink-0 mt-0.5" />
                  </div>
                  <p className="text-xs text-neutral-500 truncate w-36">
                    {userSession.data.user.email}
                  </p>
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent
              style={{
                width: MAX_WIDTH,
              }}
              className="p-1 border border-border"
            >
              <div className="">
                <Button
                  variant={"outline"}
                  className="w-full rounded-sm outline-none focus-visible:ring-0 justify-start !border-border text-sm"
                  onClick={() =>
                    signOut({
                      fetchOptions: {
                        onSuccess: () => {
                          navigate("/login");
                        },
                      },
                    })
                  }
                >
                  <LogOut size={18} />
                  Logout
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        ) : null}
      </nav>
    </header>
  );
};
