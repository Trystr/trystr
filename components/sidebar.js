import { Fragment } from "react";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { useRouter } from "next/router";

import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Profile } from "./profile";
import clsx from "clsx";
import { Logo } from "./logo";

export function OpenSidebar({ setSidebarOpen }) {
  return (
    <div className="absolute z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
      <button
        type="button"
        className="-ml-0.5 -mt-0.5 h-12 w-12 bg-white inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <MenuIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
}

export function SidebarLink({ name, href, icon: Icon }) {
  const router = useRouter();
  const current = router.asPath === href;
  return (
    <Link href={href} passHref>
      <a
        className={clsx(
          current
            ? "bg-gray-100 text-gray-900"
            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
          "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
        )}
      >
        <Icon
          className={clsx(
            current
              ? "text-gray-500"
              : "text-gray-400 group-hover:text-gray-500",
            "mr-3 flex-shrink-0 h-6 w-6"
          )}
          aria-hidden="true"
        />
        {name}
      </a>
    </Link>
  );
}

export function Sidebar({ navigation }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <Fragment>
      <div
        className={clsx(
          "flex-1 pt-5 pb-4 overflow-y-auto",
          isMobile ? "h-0" : "flex flex-col"
        )}
      >
        <Logo />
        <nav
          className={clsx("mt-5 px-2 space-y-1", {
            "flex-1 bg-white": !isMobile,
          })}
        >
          {navigation.map((item) => (
            <SidebarLink key={item.name} {...item} />
          ))}
        </nav>
      </div>
      <Profile />
    </Fragment>
  );
}
