import { SelectProps } from "@/types/Types";

export default function Select({
  error,
  title,
  children,
  ...rest
}: SelectProps) {
  return (
    <div>
      <label
        htmlFor={title}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {title}
      </label>
      <select
        {...rest}
        id={title}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value=""></option>
        {children}
      </select>
      {error && <span className="text-sm text-red-600">{error}</span>}
    </div>
  );
}
