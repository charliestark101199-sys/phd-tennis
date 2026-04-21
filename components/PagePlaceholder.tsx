type PagePlaceholderProps = {
  title: string;
};

export default function PagePlaceholder({ title }: PagePlaceholderProps) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
      <h1 className="text-2xl font-semibold text-slate-900">{title}</h1>
      <p className="mt-2 text-slate-600">Placeholder page for routing verification.</p>
    </section>
  );
}
