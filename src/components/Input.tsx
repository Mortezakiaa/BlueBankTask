import { InputProps } from "@/types/Types";

export default function Input({ title, type, error, ...rest }: InputProps) {
  return (
    <div className="relative z-0 w-full mb-5">
      <input
        type={type}
        {...rest}
        placeholder=" "
        className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
      />
      <label className="absolute duration-300 top-3 -z-1 text-gray-500">
        {title}
      </label>
      {error && <span className="text-sm text-red-600">{error}</span>}
    </div>
  );
}
