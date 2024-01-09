import Header from "@/components/header";
import Overview from "@/components/overview";
import Sidebar from "@/components/sidebar";
import Transactions from "@/components/transactions";

export default function Home() {
  return (
    <div className="flex w-full flex-col lg:grid lg:grid-cols-[224px_1fr]">
      <div className="hidden lg:block lg:col-span-1">
        <Sidebar />
      </div>

      <div className="flex w-full flex-1 flex-col gap-8 bg-[#fafafa] pb-8">
        <Header />

        <div className="flex w-full flex-col gap-8 px-8">
          <Overview />

          <Transactions />
        </div>
      </div>
    </div>
  );
}
