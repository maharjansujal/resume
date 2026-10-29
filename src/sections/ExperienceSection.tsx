import { SectionHeading } from "../components/SectionHeading";
import { jobs } from "../utils/jobs";

type JobProps = {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  className?: string;
};

const Job = ({
  title,
  company,
  startDate,
  endDate,
  responsibilities,
  className = "",
}: JobProps) => (
  <div className={`break-inside-avoid text-[15px] ${className}`}>
    <div className="flex items-center justify-between w-full font-semibold text-black">
      <span className="flex items-center gap-2 shrink-0">
        <span className="text-[9px]">❖</span>
        {title}, {company}
      </span>
      <span className="font-bold shrink-0 text-neutral-800">
        {startDate} - {endDate}
      </span>
    </div>

    <ul className="list-disc list-outside ml-6 mt-0.5 text-[14px] text-neutral-800 marker:text-black">
      {responsibilities.map((responsibility, index) => (
        <li key={index}>{responsibility}</li>
      ))}
    </ul>
  </div>
);

export function ExperienceSection() {
  return (
    <section className="mb-5">
      <SectionHeading sectionHeading="Experience" />
      <div className="space-y-4 px-1">
        {jobs.map((job) => (
          <Job key={`${job.company}-${job.title}`} {...job} />
        ))}
      </div>
    </section>
  );
}
