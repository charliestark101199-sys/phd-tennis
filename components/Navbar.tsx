import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const links = [
  { label: "Home", href: "/" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Profile", href: "/profile" },
  { label: "Schedule", href: "/schedule" },
  { label: "Coach", href: "/coach" },
  { label: "Admin", href: "/admin" }
];

export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="text-lg font-bold text-slate-900">PHD Tennis</Link>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-700">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <UserButton />
        </div>
      </nav>
    </header>
  );
}
