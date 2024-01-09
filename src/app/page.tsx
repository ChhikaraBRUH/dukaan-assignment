import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div className="flex flex-row">
      <Sidebar />

      <div className="flex flex-1 flex-col gap-8">
        <Header />
      </div>
    </div>
  );
}
