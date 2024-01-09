import { icons } from "@/components/icons";
import Button, { IconButton } from "@/components/ui/Button";
import { ArrowUpDownIcon, DownloadIcon, SearchIcon } from "lucide-react";

export default function Transactions() {
  return (
    <div className="flex w-full flex-col gap-5">
      <p className="text-xl font-medium leading-7 text-[#1A181E]">
        Transactions | This Month
      </p>

      <TableContainer />
    </div>
  );
}

function TableContainer() {
  const tableData = [];

  for (let i = 0; i < 20; i++) {
    let amount = (Math.random() * 100000).toFixed(2);
    let fees = (Number(amount) * 0.002).toFixed(2);

    tableData.push({
      id: `#80231${i}`,
      date: "7 July, 2023",
      amount: `₹${amount}`,
      fees: `₹${fees}`,
    });
  }

  return (
    <div
      className="flex flex-col gap-3 rounded-lg bg-white px-3 pb-6 pt-3"
      style={{ boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)" }}
    >
      <div className="flex w-full flex-row items-center justify-between">
        <div className="w-1/5">
          <SearchBox />
        </div>

        <div className="flex flex-row items-center gap-3">
          <Button>
            <p className="text-base font-normal leading-normal">Sort</p>
            <ArrowUpDownIcon size={16} className="h-4 w-4" />
          </Button>

          <IconButton>
            <DownloadIcon size={16} className="h-4 w-4" />
          </IconButton>
        </div>
      </div>

      <div className="flex w-full flex-col">
        <TableHeader />
        {tableData.map((data) => (
          <TableRow key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
}

function SearchBox() {
  return (
    <div className="flex w-full items-center gap-2 rounded border border-[#D9D9D9] px-4 py-2.5">
      <SearchIcon size={14} className="h-3.5 w-3.5 text-[#999999]" />
      <input
        type="text"
        placeholder="Search by order ID..."
        className="w-full bg-transparent text-sm font-normal leading-tight text-[#999999] outline-none"
      />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="grid w-full grid-cols-4 gap-10 rounded bg-[#F2F2F2] px-3 py-2.5 text-sm font-medium leading-tight text-[#4D4D4D]">
      <p>Order ID</p>
      <p className="flex flex-row items-center justify-start gap-1">
        Order date <icons.FilledChevronDown />
      </p>
      <p className="flex flex-row justify-end">Order amount</p>
      <p className="flex flex-row items-center justify-end gap-1">
        Transaction fees <icons.InfoCircle />
      </p>
    </div>
  );
}

function TableRow({
  id,
  date,
  amount,
  fees,
}: {
  id: string;
  date: string;
  amount: string;
  fees: string;
}) {
  return (
    <div className="grid w-full grid-cols-4 gap-10 border-b border-b-[#E6E6E6] px-3 py-3.5 text-sm font-normal leading-tight text-[#1A181E] hover:bg-[#F1F5F9]">
      <p className="font-medium text-[#146EB4]">{id}</p>
      <p>{date}</p>
      <p className="flex flex-row justify-end">{amount}</p>
      <p className="flex flex-row justify-end">{fees}</p>
    </div>
  );
}
