import { SectionHeading } from "../components/SectionHeading";

const education = [
  {
    school: "Islington College, London Metropolitan University",
    years: "2022 - 2025",
    program: "BSc (Hons) in Computing",
    location: "Kamalpokhari, Kathmandu",
  },
  {
    school: "National Schools of Sciences (NIST), NEB",
    years: "2020 - 2022",
    program: "+2 level (Science Stream)",
    location: "Lainchaur, Kathmandu",
  },
];

export function EducationSection() {
  return (
    <section className="mb-5 break-inside-avoid">
      <SectionHeading sectionHeading="Education" />
      <div className="space-y-3 px-1">
        {education.map((e) => (
          <div key={e.school}>
            <div className="flex items-center justify-between w-full text-[15px] font-bold text-black">
              <span className="flex items-center gap-2 shrink-0">
                <span className="text-[10px]">❖</span>
                {e.school}
              </span>
              <span className="shrink-0 text-neutral-800">{e.years}</span>
            </div>
            <div className="flex justify-between text-[14px] text-neutral-700 italic mt-0.5 ml-5">
              <span>{e.program}</span>
              <span>{e.location}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
