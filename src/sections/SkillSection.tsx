import { SectionHeading } from "../components/SectionHeading";
import { skillColumns } from "../utils/skills";

export function SkillsSection() {
  return (
    <section className="break-inside-avoid">
      <SectionHeading sectionHeading="Technical Skills & Workflow Proficiencies" />
      <div className="grid grid-cols-3 border-t border-b border-black text-[15px] text-neutral-950">
        {skillColumns.map((col, i) => (
          <div
            key={col.title}
            className={`px-3 py-2 ${
              i < skillColumns.length - 1 ? "border-r border-neutral-300" : ""
            }`}
          >
            <h3 className="font-bold text-center uppercase mb-1.5 text-neutral-900">
              {col.title}
            </h3>
            <ul className="space-y-0.5 ml-1 list-disc list-inside marker:text-black">
              {col.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
