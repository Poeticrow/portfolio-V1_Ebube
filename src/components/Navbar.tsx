import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <nav className="z-10 text-xl flex justify-between ">
      <ul className="flex gap-16 items-center ">
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className="hover:text-accent-400 transition-colors"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="hover:text-accent-400 transition-colors"
          >
            Contact
          </Link>
        </li>
      </ul>
      <DarkModeToggle />
    </nav>
  );
}
