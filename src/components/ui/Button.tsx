export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="flex flex-row items-center gap-1.5 rounded border border-[#D9D9D9] bg-white px-3.5 py-1.5 text-[#4D4D4D]">
      {children}
    </button>
  );
}

export function IconButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="flex items-center justify-center rounded border border-[#D9D9D9] bg-white p-2.5 text-[#4D4D4D]">
      {children}
    </button>
  );
}
