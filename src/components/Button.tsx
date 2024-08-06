import { ButtonProps } from "@/types/Types";

export default function Button({ text, type, mode, onclick }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onclick}
      className={`
        ${
          mode === "default" &&
          "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        }
        ${
          mode === "prev" &&
          "bg-transparent transition-all hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        }
      `}
    >
      {text}
    </button>
  );
}
