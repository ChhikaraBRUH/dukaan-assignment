import Button from "@/components/ui/Button";
import { ChevronDownIcon } from "lucide-react";

export default function Overview() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex w-full flex-row items-center justify-between">
        <p className="text-xl font-medium leading-7 text-[#1A181E]">Overview</p>

        <Button>
          <p className="text-base font-normal leading-normal">Last Month</p>

          <ChevronDownIcon size={16} className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex w-full flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
        {STATS.map((stat) => (
          <StatsCard key={stat.title} title={stat.title} value={stat.value} />
        ))}
      </div>
    </div>
  );
}

function StatsCard({ title, value }: { title: string; value: string }) {
  return (
    <div
      className="flex w-full flex-col gap-4 rounded-lg bg-white p-5"
      style={{ boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)" }}
    >
      <p className="text-base font-normal leading-normal text-[#4D4D4D]">
        {title}
      </p>

      <div className="text-[32px] font-medium leading-[38px] text-[#1A181E]">
        {value}
      </div>
    </div>
  );
}

const STATS = [
  {
    title: "Online orders",
    value: "231",
  },
  {
    title: "Amount received",
    value: "₹23,92,312.19",
  },
];
