type JobProps = {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  className?: string;
};

export function Job({
  title,
  company,
  startDate,
  endDate,
  responsibilities,
  className = "",
}: JobProps) {
  return (
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
}
