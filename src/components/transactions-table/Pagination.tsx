import cn from "@/utils/cn";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import Button from "../ui/Button";

export default function Pagination() {
  return (
    <div className="flex flex-row items-center justify-center gap-2 text-xs font-medium leading-tight text-[#4D4D4D] md:gap-6 md:text-sm">
      <Button>
        <ChevronLeftIcon size={18} className="h-[18px] w-[18px]" />
        <p className="">Previous</p>
      </Button>

      <div className="flex flex-row items-center justify-center gap-1 md:gap-2">
        <PageButton pageNum={1} />
        <PageButton pageNum={"..."} />
        <PageButton pageNum={10} active />

        <div className="hidden flex-row items-center justify-center gap-2 md:flex">
          {Array.from({ length: 8 }, (_, i) => i + 11).map((pageNum) => (
            <PageButton key={pageNum} pageNum={pageNum} />
          ))}
        </div>

        <div className="block md:hidden">
          <PageButton pageNum={11} />
        </div>
      </div>

      <Button>
        <p className="">Next</p>
        <ChevronRightIcon size={18} className="h-[18px] w-[18px]" />
      </Button>
    </div>
  );
}

function PageButton({
  pageNum,
  active = false,
}: {
  pageNum: number | string;
  active?: boolean;
}) {
  return (
    <button
      className={cn(
        "rounded p-2",
        active ? "bg-[#146EB4] text-white" : "bg-white",
      )}
    >
      {pageNum}
    </button>
  );
}
