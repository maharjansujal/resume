export default function SectionHeading({
  sectionHeading,
}: {
  sectionHeading: string;
}) {
  return (
    <div className="bg-neutral-200 text-center font-bold text-black text-lg uppercase mb-3 print:bg-neutral-200">
      {sectionHeading}
    </div>
  );
}
