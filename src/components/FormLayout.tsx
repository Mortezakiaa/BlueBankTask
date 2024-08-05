import { TChild } from "@/types/Types";

type T = TChild & { onSubmit?: (e: any) => void };

export default function FormLayout({ children, onSubmit }: T) {
  return (
    <form
      onSubmit={onSubmit}
      className="rounded-lg border-slate-300 border px-4 py-3 flex flex-col gap-3 max-w-[500px] mx-auto mt-10"
      noValidate
    >
      {children}
    </form>
  );
}
