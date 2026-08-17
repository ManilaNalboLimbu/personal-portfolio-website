export function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">{title}</h2>
      {children ? <div className="mt-5 text-base leading-8 text-slate-300">{children}</div> : null}
    </div>
  );
}
