export default function MDXLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="min-h-[calc(100vh-4rem)] px-6 md:px-8 max-w-3xl mx-auto py-12 md:py-16">
      <div className="prose-custom">
        {children}
      </div>
    </article>
  );
}
