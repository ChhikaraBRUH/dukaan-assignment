import Header from "@/components/header";
import Overview from "@/components/overview";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div className="flex flex-row">
      <Sidebar />

      <div className="flex w-full flex-1 flex-col gap-8 bg-[#fafafa]">
        <Header />

        <div className="flex w-full flex-col gap-8 px-8">
          <Overview />
        </div>
      </div>
    </div>
  );
}
