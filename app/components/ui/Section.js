// app/components/ui/Section.js
export default function Section({ className = "", children, id }) {
  return (
    <section id={id} className={`py-12 sm:py-16 lg:py-24 ${className}`}>
      {children}
    </section>
  );
}