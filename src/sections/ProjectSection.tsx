import { SectionHeading } from "../components/SectionHeading";
import { projects } from "../utils/projects";

type Project = {
  name: string;
  url?: string;
  bullets: string[];
};

const Project = (p: Project) => (
  <div key={p.name} className="break-inside-avoid">
    <div className="flex items-center gap-2 text-[15px] font-semibold text-black">
      <span className="text-[10px]">❖</span>
      {p.url ? (
        <a href={p.url} target="_blank" rel="noopener noreferrer">
          {p.name}
        </a>
      ) : (
        p.name
      )}
    </div>
    <ul className="list-disc list-outside ml-6 mt-1 space-y-0.5 text-[15px] text-neutral-800 marker:text-black">
      {p.bullets.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
  </div>
);

export function ProjectSection() {
  return (
    <section className="mb-5">
      <SectionHeading sectionHeading="Projects" />
      <div className="space-y-4 px-1">
        {projects.map((p) => (
          <Project key={p.name} {...p} />
        ))}
      </div>
    </section>
  );
}
