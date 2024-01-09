import cn from "@/utils/cn";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { icons, sidebarIcons } from "../icons";

export default function Sidebar() {
  return (
    <aside className="flex h-[100vh] w-[224px] shrink-0 flex-col items-center justify-between gap-6 overflow-auto bg-[#1E2640] px-2 py-4">
      <div className="flex w-full flex-col gap-6">
        <StoreName />

        <div className="flex w-full flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.title} {...item} />
          ))}
        </div>
      </div>

      <div className="w-full px-2">
        <AvailableCredits />
      </div>
    </aside>
  );
}

function StoreName() {
  return (
    <div className="flex w-full flex-row items-center justify-between gap-3 px-2">
      <div className="flex flex-row items-center gap-3">
        <Image
          src="/store-img.png"
          alt="Store Image"
          width={40}
          height={40}
          className="h-10 w-10 rounded"
        />

        <div className="flex w-full flex-col justify-between gap-1">
          <div className="text-[15px] font-medium leading-snug text-white">
            Nishyan
          </div>

          <Link
            href="/"
            className="text-[13px] font-normal leading-none text-white underline opacity-80"
          >
            Visit store
          </Link>
        </div>
      </div>

      <ChevronDown size={20} className="h-5 w-5 text-white" />
    </div>
  );
}

function NavItem({
  title,
  icon,
  active = false,
}: {
  title: string;
  icon: JSX.Element;
  active?: boolean;
}) {
  return (
    <div
      className={cn(
        "group flex w-full cursor-pointer flex-row items-center gap-3 rounded px-4 py-2 text-white",
        active
          ? "bg-white bg-opacity-10"
          : "opacity-80 hover:bg-white hover:bg-opacity-10 hover:opacity-100",
      )}
    >
      <div className="flex h-5 w-5 items-center justify-center">{icon}</div>

      <p className="text-sm font-medium leading-tight">{title}</p>
    </div>
  );
}

function AvailableCredits() {
  return (
    <div className="flex w-full flex-row gap-3 rounded bg-[#353C53] px-3 py-1.5">
      <div className="flex h-9 w-9 items-center justify-center rounded bg-white bg-opacity-10">
        <icons.Wallet />
      </div>

      <div className="flex flex-col justify-between gap-0.5">
        <p className="text-[13px] font-normal leading-none text-white opacity-80">
          Available credits
        </p>

        <p className="text-base font-medium leading-normal text-white">
          222.10
        </p>
      </div>
    </div>
  );
}

const NAV_ITEMS = [
  {
    title: "Home",
    icon: <sidebarIcons.Home />,
  },
  {
    title: "Orders",
    icon: <sidebarIcons.Orders />,
  },
  {
    title: "Products",
    icon: <sidebarIcons.Products />,
  },
  {
    title: "Delivery",
    icon: <sidebarIcons.Delivery />,
  },
  {
    title: "Marketing",
    icon: <sidebarIcons.Marketing />,
  },
  {
    title: "Analytics",
    icon: <sidebarIcons.Analytics />,
  },
  {
    title: "Payments",
    icon: <sidebarIcons.Payments />,
    active: true,
  },
  {
    title: "Tools",
    icon: <sidebarIcons.Tools />,
  },
  {
    title: "Discounts",
    icon: <sidebarIcons.Discounts />,
  },
  {
    title: "Audience",
    icon: <sidebarIcons.Audience />,
  },
  {
    title: "Appearance",
    icon: <sidebarIcons.Appearance />,
  },
  {
    title: "Plugins",
    icon: <sidebarIcons.Plugins />,
  },
];
