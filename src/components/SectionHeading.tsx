export function SectionHeading({ sectionHeading }: { sectionHeading: string }) {
  return (
    <div className="bg-neutral-200 [-webkit-print-color-adjust:exact] [print-color-adjust:exact] text-center font-bold text-black text-[15px] uppercase mb-1.5 py-0.5">
      {sectionHeading}
    </div>
  );
}
