import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet";
import { MenuIcon } from "lucide-react";

import { SidebarContent } from "./index";

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon size={20} className="h-5 w-5 cursor-pointer lg:hidden" />
      </SheetTrigger>
      <SheetContent side="left" className="w-full overflow-y-auto bg-[#1E2640]">
        <SidebarContent />
      </SheetContent>
    </Sheet>
  );
}
