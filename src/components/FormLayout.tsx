import { TChild } from "@/types/Types";

export default function FormLayout({ children }: TChild) {
  return (
    <div className="rounded-lg border-slate-300 border px-4 py-3 flex flex-col gap-3 max-w-[500px] mx-auto mt-10">
      {children}
    </div>
  );
}
