import Link from "next/link";

export default function Header() {
  return (
    <header className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <ul className="flex  items-center gap-2 rounded-lg bg-gray-50  md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
          <li>
            <Link
              href="/"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              ثبت و انتخاب تسهیالت
            </Link>
          </li>
          <li>
            <Link
              href="/repaymentList"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              لیست تسهیالت
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
