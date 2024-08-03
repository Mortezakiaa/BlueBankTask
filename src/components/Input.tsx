import { InputProps } from "@/types/Types";

const Input: React.FC<InputProps> = ({
  onchange,
  value,
  title,
  type,
  name,
  required,
  requiredText,
}) => {
  return (
    <div className="relative z-0 w-full mb-5">
      <input
        value={value}
        type={type}
        name={name}
        onChange={onchange}
        placeholder=" "
        required={required}
        className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
      />
      <label
        htmlFor={name}
        className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
      >
        {title}
      </label>
      <span className="text-sm text-red-600 hidden">{requiredText}</span>
    </div>
  );
};
export default Input;
