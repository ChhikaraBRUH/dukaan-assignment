import { icons } from "@/components/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import { HelpCircleIcon, SearchIcon } from "lucide-react";

import MobileMenu from "./sidebar/MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 flex flex-row items-center gap-4 border-b border-b-[#D9D9D9] bg-white px-8 py-3">
      <MobileMenu />

      <div className="grid w-full grid-cols-3 gap-4">
        <HeaderTitle />

        <SearchBox />

        <ActionButtons />
      </div>
    </header>
  );
}

function HeaderTitle() {
  return (
    <div className="flex flex-row items-center gap-4">
      <p className="text-[15px] font-normal leading-snug text-[#1A181E]">
        Payments
      </p>

      <HowItWorksTooltip />
    </div>
  );
}

function SearchBox() {
  return (
    <div className="flex w-full items-center gap-2 rounded-md bg-[#F2F2F2] px-4 py-[9px]">
      <SearchIcon size={16} className="h-4 w-4 text-[#808080]" />
      <input
        type="text"
        placeholder="Search features, tutorials, etc."
        className="w-full bg-transparent text-[15px] font-normal leading-snug text-[#808080] outline-none"
      />
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="flex w-full items-center justify-end gap-3">
      <div className="cursor-pointer">
        <icons.Chat />
      </div>
      <div className="cursor-pointer">
        <icons.Menu />
      </div>
    </div>
  );
}

function HowItWorksTooltip() {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger>
          <div className="hidden flex-row items-center gap-1.5 md:flex">
            <HelpCircleIcon size={14} className="h-3.5 w-3.5 text-[#4D4D4D]" />

            <p className="text-xs font-normal leading-none text-[#4D4D4D]">
              How it works
            </p>
          </div>
        </TooltipTrigger>
        <TooltipContent className="border bg-white">
          <p className="text-xs font-normal leading-none text-[#4D4D4D]">
            You can view our demo to know how it works!
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
