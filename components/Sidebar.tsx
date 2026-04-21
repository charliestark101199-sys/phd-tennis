import Link from "next/link";

type SidebarProps = {
  title: string;
  items: Array<{
    label: string;
    href: string;
  }>;
};

export default function Sidebar({ title, items }: SidebarProps) {
  return (
    <aside className="card">
      <h2 className="section-title">{title}</h2>
      <div style={{ display: "grid", gap: "0.5rem" }}>
        {items.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
    </aside>
  );
}
