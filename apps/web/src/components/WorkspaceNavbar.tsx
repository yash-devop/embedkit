import React from "react";
import { Link, useLocation } from "react-router";

const NAVBAR_ROUTES = [
  {
    id: 1,
    href: "/dashboard/overview",
    name: "Overview",
  },
  {
    id: 2,
    href: "/dashboard/integration",
    name: "Integration",
  },
];

export const WorkspaceNavbar = () => {
  const location = useLocation();

  return (
    <header className="h-10 border-b border-border w-full ">
      <nav className="flex items-center h-full gap-x-5 px-3.5 text-sm max-w-[1500px] mx-auto">
        {NAVBAR_ROUTES.map((routeUnit) => {
          const isActive = location.pathname === routeUnit.href;

          return (
            <>
              <Link
                key={routeUnit.id}
                to={routeUnit.href}
                className={`relative ${isActive ? "text-primary" : "text-heading/60"}`}
              >
                <span>{routeUnit.name}</span>
                {isActive ? (
                  <div className="h-[1.5px] w-full bg-primary absolute -bottom-2.5 " />
                ) : null}
              </Link>
            </>
          );
        })}
      </nav>
    </header>
  );
};
