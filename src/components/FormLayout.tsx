import { TChild } from "@/types/Types";

<<<<<<< HEAD
type T = TChild & { onSubmit: (e: any) => void };

export default function FormLayout({ children, onSubmit }: T) {
  return (
    <form
      onSubmit={onSubmit}
      className="rounded-lg border-slate-300 border px-4 py-3 flex flex-col gap-3 max-w-[500px] mx-auto mt-10"
      noValidate
    >
      {children}
    </form>
=======
export default function FormLayout({ children }: TChild) {
  return (
    <div className="rounded-lg border-slate-300 border px-4 py-3 flex flex-col gap-3 max-w-[500px] mx-auto mt-10">
      {children}
    </div>
>>>>>>> 11a93e5f3603a4bb4647fee60ed1aaaec150dc6e
  );
}
